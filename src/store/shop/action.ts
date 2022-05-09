import { GetShopData } from './../../services/ShopApiService';
import { ShopActionTypes } from "./action-types";

export const initShopData = (data) => ({
  type: ShopActionTypes.FETCH_SHOPDATA,
  payload: {
    data
  }
})

// export init

export function fetchShopData() {
  return async function (dispatch) {
    const requestData = await GetShopData();

    return dispatch(initShopData(requestData.data))
  }
}
