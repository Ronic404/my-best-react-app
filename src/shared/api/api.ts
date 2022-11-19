import axios from 'axios'

import { USER_LS_KEY } from 'shared/constants/localStorage'

export const $api = axios.create({
  baseURL: __API__,
})

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.authorization = localStorage.getItem(USER_LS_KEY) ?? ''
  }

  return config
})
