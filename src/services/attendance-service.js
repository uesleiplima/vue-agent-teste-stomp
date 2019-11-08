import http from './http'

const handleResponse = res => res.data
export const getInformations = (username) => http.get(`/agents/${username}`).then(handleResponse)