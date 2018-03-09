// ng
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// npm
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
//  env
import { environment } from '@env/environment';
// models
import { IFlatObject } from '@models/common.model';
import { IReqOptions, IReqParams, IReqParamsData } from '@models/http.model';

@Injectable()
export class ApiService {
  private _defaultContentType = 'application/json';
  constructor(private http: HttpClient) {}

  request<T>({
    method,
    url,
    auth,
    queryParams,
    apiEnv,
    ...options
  }: IReqParams | IReqParamsData<T>): Observable<T> {
    const data = (options as any).data || null;
    const reqUrl = (apiEnv || environment.config.mainApiUrl) + url;
    const reqArguments: any[] = [reqUrl];
    if (data) {
      reqArguments.push(data);
    }
    reqArguments.push(this._createOptions(queryParams, auth));
    return this.http[method]
      .apply(this.http, reqArguments)
      .pipe(catchError(this._throwReactiveError));
  }

  private _createOptions(
    queryParams?: IFlatObject,
    auth?: boolean
  ): IReqOptions {
    const headers: any = { 'Content-Type': this._defaultContentType };
    if (auth) {
      const token = window.localStorage.getItem('token');
      if (token) {
        headers['Authorization'] = 'Bearer ' + token;
      }
    }
    const options: IReqOptions = {
      headers: new HttpHeaders(headers)
    };
    if (queryParams) {
      options.params = new HttpParams({ fromObject: queryParams });
    }
    return options;
  }

  // private _setAuth(headers) {

  // }

  private _throwReactiveError(error: any): ErrorObservable {
    console.error('api.service::throwReactiveError', error);
    return Observable.throw(error);
  }
}
