// npm
import { Action } from '@ngrx/store';
// models
import { IUser } from '@models/user.model';

// register
export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAIL = '[Auth] Register Fail';
export class RegisterAction implements Action {
  readonly type = REGISTER;
  constructor(public payload: IUser) {}
}
export class RegisterSuccessAction implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload: string) {}
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
  constructor(public payload: IUser) {}
}
export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: string) {}
}
export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public error: Error) {}
}

// user
export const USER = '[Auth] User';
export const USER_SUCCESS = '[Auth] User Success';
export const USER_FAIL = '[Auth] User Fail';
export class UserAction implements Action {
  readonly type = USER;
  constructor() {}
}
export class UserSuccessAction implements Action {
  readonly type = USER_SUCCESS;
  constructor(public payload: IUser) {}
}
export class UserFailAction implements Action {
  readonly type = USER_FAIL;
  constructor(public error: Error) {}
}

export type Actions =
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | UserAction
  | UserSuccessAction
  | UserFailAction;
