// ng
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// npm
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { defer } from 'rxjs/observable/defer';
import { catchError, retryWhen, tap } from 'rxjs/operators';
//  env
import { environment } from '@env/environment';
// models
import { IObject } from '@models/common.model';
import {
  EMethods,
  EMethodsWithBody,
  IReqOptions,
  IReqParams,
  IReqParamsWithBody,
  TAuthorizedMethods,
  IRetryReqOptions
} from '@models/http.model';
import { retryReqStrategy } from '@app/core/values/retry-req-strategy.value';

@Injectable()
export class ApiService {
  private _defaultContentType = 'application/json';
  constructor(private http: HttpClient) {}

  // requests with body
  post<T>(options: IReqParamsWithBody<T>): Observable<T> {
    return this.request<T>('post', options);
  }
  put<T>(options: IReqParamsWithBody<T>): Observable<T> {
    return this.request<T>('put', options);
  }
  patch<T>(options: IReqParamsWithBody<T>): Observable<T> {
    return this.request<T>('patch', options);
  }

  // request without body
  get<T>(options: IReqParams): Observable<T> {
    return this.request<T>('get', options);
  }
  delete<T>(options: IReqParams): Observable<T> {
    return this.request<T>('delete', options);
  }
  head<T>(options: IReqParams): Observable<T> {
    return this.request<T>('head', options);
  }

  request<T>(
    method: TAuthorizedMethods,
    {
      url,
      auth,
      queryParams,
      apiEnv,
      headers,
      refreshToken,
      ...options
    }: IReqParams | IReqParamsWithBody<T>
  ): Observable<T> {
    // prepare url
    url = (apiEnv || environment.config.mainApiUrl) + url;

    // check method
    const reqMethod = EMethods[method] || EMethodsWithBody[method];
    if (!reqMethod) {
      return this._throwReactiveError(
        new Error(`${method} is not a valid HTTP method`)
      ) as Observable<any>;
    }

    // prepare options
    const httpRequestOptions: IReqOptions = {
      headers: this._createHeaders(headers, auth)
    };
    if (queryParams) {
      httpRequestOptions.params = this._createQueryParams(queryParams);
    }
    if (EMethodsWithBody[method]) {
      httpRequestOptions.body = (options as IReqParamsWithBody<T>).body;
    }

    // auth routes could need a "refresh token" action in case of 403 / 401
    const retryOptions: IRetryReqOptions = refreshToken
      ? this._getAuthRetryOptions(httpRequestOptions)
      : {};

    // do request, retry if needed, and catch any error as observable
    return defer(() =>
      this.http.request(reqMethod, url, httpRequestOptions)
    ).pipe(
      retryWhen(retryReqStrategy(retryOptions)),
      catchError(this._throwReactiveError)
    );
  }

  refreshToken(): Observable<any> {
    // implements here your own refresh token request if needed
    return this.http.post('http://localhost:3000/api/token', {
      refreshToken: 'test'
    });
  }

  private _getAuthRetryOptions(
    // implements here your own "retry action" when a request fail
    httpRequestOptions: IReqOptions
  ): IRetryReqOptions {
    return {
      maxRetryAttempts: 1,
      scalingDuration: 0,
      statusCodes: [401, 403],
      requestToWait: this.refreshToken().pipe(
        tap((token: number) => {
          httpRequestOptions.headers = new HttpHeaders({
            Authorization: 'Bearer ' + token
          });
        })
      )
    };
  }

  private _createQueryParams(queryParams: IObject): HttpParams {
    return queryParams ? new HttpParams({ fromObject: queryParams }) : null;
  }

  private _createHeaders(headers: IObject = {}, auth?: boolean): HttpHeaders {
    // basic header + custom
    const httpHeaders: IObject = {
      'Content-Type': this._defaultContentType,
      ...headers
    };

    // add auth
    const token: string = window.localStorage.getItem('token');
    if (auth && token) {
      httpHeaders['Authorization'] = 'Bearer ' + token;
    }
    return new HttpHeaders(httpHeaders);
  }

  private _throwReactiveError(error: any): ErrorObservable {
    console.error('api.service::throwReactiveError', error);
    return ErrorObservable.create(error);
  }
}
