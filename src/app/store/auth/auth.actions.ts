import { Action } from '@ngrx/store';

// register
export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAIL = '[Auth] Register Fail';
export class RegisterAction implements Action {
  readonly type = REGISTER;
  constructor(public payload: any) {}
}
export class RegisterSuccessAction implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload: any) {}
}
export class RegisterFailAction implements Action {
  readonly type = REGISTER_FAIL;
  constructor(public error: Error) {}
}

// login
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}
export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}
export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public error: Error) {}
}

export type Actions =
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction;
