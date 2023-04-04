import axios from "axios";
import {Cookie} from "../helpers/cookie";


export const api = axios.create({
    baseURL: 'http://localhost:2000/'
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = 'ok'
    // config.headers['Content-Type'] = 'application-json'

    return config
})

api.interceptors.response.use((response) => {
    return response
}, async (error) => {

    const originalReg = error.config
    const token = Cookie.getCookie('token')

    if(error.response.status === 401 && token) {
        const tokenRes = await axios.post('http://localhost:2000/refresh', { token })
        Cookie.setCookie('token', tokenRes.data.new_token)
        originalReg.headers.Authorization = tokenRes.data.new_token
        api.request(originalReg)
    }
    return error
})