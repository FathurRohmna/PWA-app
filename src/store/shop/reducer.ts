import { ShopActionTypes } from './action-types';
import { IAction } from "store/authentication/action";

export const shopReducer = (storeData: any, action: IAction<any>) => {
  let newStore = { haircutStyle: null, barber: null, ...storeData }

  switch(action.type) {
    case ShopActionTypes.FETCH_SHOPDATA:
      newStore.haircutStyle = action.payload.data.haircut
      newStore.barber = action.payload.data.barbers

      return newStore

    default:
      return storeData || {}
  }
}