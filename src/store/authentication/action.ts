import { LoginRequest, RegisterRequest } from './../../services/AuthenticationApiService';
import { Action } from 'redux';
import { AuthenticationActionTypes } from './action-types';

export interface IAction<T> extends Action<any> {
  payload?: T,
  [extraProps: string]: any
}

export const userLogin = () => ({
  type: AuthenticationActionTypes.USER_LOGIN,
})

export const authenticationSuccess = (data) => ({
  type: AuthenticationActionTypes.AUTHENTICATION_SUCCESS,
  payload: {
    user: data
  }
}) 

export const authenticationFail = (error) => ({
  type: AuthenticationActionTypes.AUTHENTICATION_FAIL,
  payload: {
    error
  }
})

export function requestLoginData(body: any) {
  return async function (dispatch) {
    dispatch(userLogin())
    try {
      const requestLoginAuth = await LoginRequest(body)

      return dispatch(authenticationSuccess(requestLoginAuth.data))
    } catch (error: any) {
      return dispatch(authenticationFail(error))
    }
  }
}

export function requestRegisterData(body: any) {
  return async function (dispatch) {
    try {
      const requestRegisterAuth = await RegisterRequest(body)

      return dispatch(authenticationSuccess(requestRegisterAuth.data))
    } catch (error: any) {
      return dispatch(authenticationFail(error))
    }
  }
}
