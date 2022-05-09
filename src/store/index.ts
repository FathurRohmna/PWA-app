import { authenticationReducer, accessToken } from './authentication/reducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from "redux"
import thunk from "redux-thunk";
import { shopReducer } from './shop/reducer';

export type State = {
  authentication: {
    isLoading: boolean,
    isLoaded: boolean,
    user: any,
    errors: any,
  }
}

export const rootReducers = combineReducers({
  authentication: authenticationReducer,
  shop: shopReducer
})

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const initialState = {
    authentication: {
      user: {
        access_token: accessToken.get() || ''
      }
    }
  }

  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  )

  return store
}
