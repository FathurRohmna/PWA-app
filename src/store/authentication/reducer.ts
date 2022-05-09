import { AuthenticationActionTypes } from './action-types';
import { IAction } from './action';
import Storage from '../../services/Storage';

export const accessToken = new Storage<any>('access-token')
export const refreshToken = new Storage<any>('refresh-token')

export const authenticationReducer = (storeData: any, action: IAction<any>) => {
  let newStore = { user: null, authenticated: false, isLoading: false, isLoaded: false, errors: null, ...storeData }

  switch(action.type) {
    case AuthenticationActionTypes.USER_LOGIN:
      newStore.isLoading = true
      newStore.isLoaded = true
      newStore.errors = null

      return newStore
    
    case AuthenticationActionTypes.AUTHENTICATION_SUCCESS:
      newStore.user = action.payload.user
      newStore.authenticated = true
      newStore.isLoading = false

      accessToken.set(action.payload.user.access_token)
      refreshToken.set(action.payload.user.refresh_token)

      return newStore
    
    case AuthenticationActionTypes.AUTHENTICATION_FAIL:
      newStore.authenticated = false
      newStore.errors = action.payload.error
      newStore.isLoading = false

      return newStore
    
    default:
      return storeData || {}
  }
}