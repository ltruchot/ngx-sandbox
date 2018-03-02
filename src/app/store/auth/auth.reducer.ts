import * as auth from './auth.actions';

export interface IAuthState {
  loading: boolean;
  result: string[];
  token: string;
  error: Error;
  type: string;
}

export const initialState: IAuthState = {
  loading: false,
  result: [],
  error: null,
  token: '',
  type: ''
};

export function reducer(
  state: IAuthState = initialState,
  action: auth.Actions
): IAuthState {
  switch (action.type) {
    case auth.REGISTER: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      };
    }

    case auth.REGISTER_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case auth.REGISTER_FAIL: {
      return {
        ...state,
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
export const getAuthToken = (state: IAuthState) => state.token;
