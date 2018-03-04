import * as auth from './auth.actions';
// models
import { IUser } from '@models/user.model';

export interface IAuthState {
  loading: boolean;
  currentUser: IUser;
  error: Error;
  type: string;
}

export const initialState: IAuthState = {
  loading: false,
  currentUser: null,
  error: null,
  type: ''
};

export function reducer(
  state: IAuthState = initialState,
  action: auth.Actions
): IAuthState {
  switch (action.type) {
    case auth.LOGIN:
    case auth.REGISTER:
    case auth.USER: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      };
    }
    case auth.LOGIN_SUCCESS:
    case auth.REGISTER_SUCCESS: {
      window.localStorage.setItem('token', action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }
    case auth.USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }
    case auth.LOGIN_FAIL:
    case auth.REGISTER_FAIL:
    case auth.USER_FAIL: {
      window.localStorage.removeItem('token');
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}

export const loading = (state: IAuthState) => state.loading;
export const currentUser = (state: IAuthState) => state.currentUser;
