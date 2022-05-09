import { RestUrls } from './Urls';
import { instance } from './BaseApiService';

export const SendRequest = (method, url, params?) => instance.request({ method, url, params })
export const PostRequest = (method, url, data?) => instance.request({ method, url, data })

export const LoginRequest = async (payload) => PostRequest("post", RestUrls.login, payload)

export const RegisterRequest = async (payload) => PostRequest("post", RestUrls.register, payload)
