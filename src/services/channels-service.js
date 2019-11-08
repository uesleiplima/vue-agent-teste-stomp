import http from './http'

const handleResponse = res => res.data
export const connectOnChannel = (agentId, channel) =>  http.post(`/channels/${ channel }/connect/agent/${ agentId }`).then(handleResponse)
export const disconnectOnChannel = (agentId, channel) =>  http.post(`/channels/${ channel }/disconnect/agent/${ agentId }`).then(handleResponse)