import http from './http'

export const authentication = (user) => http.post('auth/login', user)