import { RestUrls } from './Urls';
import { SendRequest } from "./AuthenticationApiService";

export const GetShopData = async () => SendRequest("get", RestUrls.shopdata)