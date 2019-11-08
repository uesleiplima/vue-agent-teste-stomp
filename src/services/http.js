import axios from 'axios'
import interceptorRequest from './interceptors/interceptor-request'
import interceptorResponse from './interceptors/interceptor-response'
import errorHandler from './interceptors/interceptors-error-response'

const client = axios.create({
    baseURL: 'http://172.16.0.216/api/weon/v1/',
    xsrfHeaderName: 'authorization',
    validateStatus: status => {
        return (status >= 200 && status < 300) || status == 404
    }
})

client.interceptors.request.use(interceptorRequest, errorHandler)
client.interceptors.response.use(interceptorResponse, errorHandler)

export default client