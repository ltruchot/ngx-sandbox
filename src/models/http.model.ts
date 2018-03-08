// ng
import { HttpHeaders, HttpParams } from '@angular/common/http';
// models
import { IFlatObject } from '@models/common.model';

export interface IReqOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface IReqParams {
  url: string;
  method: 'get' | 'delete';
  auth?: boolean;
  urlParams?: IFlatObject;
  apiEnv?: string;
}

export interface IReqParamsData<T> {
  url: string;
  method: 'post' | 'put' | 'patch';
  auth?: boolean;
  urlParams?: IFlatObject;
  apiEnv?: string;
  data: T;
}
