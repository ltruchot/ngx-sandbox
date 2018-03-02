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
import { IRequestOptions } from '@models/http.model';

@Injectable()
export class ApiService {
  private apiUrls: { [s: string]: string } = {
    main: environment.config.mainApiUrl
  };

  constructor(private http: HttpClient) {}

  getResources<T>(
    url: string,
    search?: IFlatObject,
    apiUrl?: string
  ): Observable<T> {
    return this.doRequest<T>('get', url, null, search, apiUrl);
  }

  putResources<T>(
    url: string,
    data: T,
    search?: IFlatObject,
    apiUrl?: string
  ): Observable<T> {
    return this.doRequest<T>('put', url, data, search, apiUrl);
  }

  postResources<T>(
    url: string,
    data: T,
    search?: IFlatObject,
    apiUrl?: string
  ): Observable<T> {
    return this.doRequest<T>('post', url, data, search, apiUrl);
  }

  deleteResources<T>(
    url: string,
    search?: IFlatObject,
    apiUrl?: string
  ): Observable<T> {
    return this.doRequest<T>('delete', url, null, search, apiUrl);
  }

  doRequest<T>(
    type: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: T,
    search?: IFlatObject,
    apiUrl?: string
  ): Observable<T> {
    url = (apiUrl || this.apiUrls.main) + url;
    const params: any[] = [url];
    if (data) {
      params.push(data);
    }
    params.push(this.createOptions(search));
    return this.http[type]
      .apply(this.http, params)
      .pipe(catchError(this.throwReactiveError));
  }

  createOptions(search?: IFlatObject): IRequestOptions {
    const options: IRequestOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (search) {
      options.params = new HttpParams({ fromObject: search });
    }
    return options;
  }

  throwReactiveError(error: any): ErrorObservable {
    console.error('api.service::throwReactiveError', error);
    return Observable.throw(error);
  }
}
