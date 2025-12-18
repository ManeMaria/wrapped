import axiosInstance from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponseHeaders } from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL

const config: AxiosRequestConfig = {
  baseURL: VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
}

const unathenticatedInstance = axiosInstance.create(config)
const authenticatedInstance = axiosInstance.create(config)

unathenticatedInstance.interceptors.response.use(
  (response) => response?.data,
  async (error: AxiosError) => await Promise.reject(error),
)

authenticatedInstance.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {

    if (error.response) {
      if (error.response.status !== 401) {
        return await Promise.reject(error)
      }
    }
  },
)

export const axiosProvider = {
  unauthorized() {
    unathenticatedInstance.defaults.baseURL = VITE_API_URL

    return unathenticatedInstance
  },
  authorized() {
    authenticatedInstance.interceptors.request.use(
      function (newConfig) {
        newConfig.baseURL = VITE_API_URL

        return newConfig
      },
      async function (error): Promise<unknown> {
        return await Promise.reject(error)
      },
    )

    return authenticatedInstance
  },
}
