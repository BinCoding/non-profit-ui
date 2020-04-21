import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/login";


export type LoginReducerState = {
  loading: boolean,
  success: boolean,
  error: boolean,
  response: object | null,
};

export const LOGIN_INITIAL_SATE: LoginReducerState = {
  loading: false,
  success: false,
  error: false,
  response: null,
}


export const loginReducer = (state: any = LOGIN_INITIAL_SATE, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      }
    }
    default:
      return state
  }
}