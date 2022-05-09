import { accessToken } from './../store/authentication/reducer';
import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import HttpStatusCode from "./HttpStatusCode";

const AuthInterceptor = (config: any): AxiosRequestConfig => {
  const token = accessToken.get()

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
}

const OnResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> => response

const OnResponseFailure = (error: any): Promise<any> => {
  const httpStatus = error?.response?.status

  const error_msg = error?.response?.data.message


  switch(httpStatus) {
    case HttpStatusCode.UNAUTHORIZED:
      console.log('UNAUTHORIED');
      break
    case HttpStatusCode.FORBIDDEN:
      console.log('FORBIDDEN');
      break
    case HttpStatusCode.BADREQUEST:
      console.log('BADREQUEST');
      break
    default:
      console.log('Unknown error occurred, please try again later.');
      break
  }

  return Promise.reject(error_msg)
}

export const instance: AxiosInstance = axios.create({
  baseURL: ''
})

instance.defaults.headers.get.Accepts = 'application/json'
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

instance.interceptors.request.use(AuthInterceptor)

instance.interceptors.response.use(OnResponseSuccess, OnResponseFailure)
