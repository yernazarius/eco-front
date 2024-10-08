import axios, { type CreateAxiosDefaults } from 'axios'

import { errorCatch } from '@/api/error'
import {
    getAccessToken,
    removeFromStorage
} from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
// 

const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Use the BASE_URL from config
    withCredentials: true
}


const s3Options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_S3_AXIOS,
    withCredentials: true,
    headers: {
        'API_KEY': 'test_key',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
    }
}

const AxiosS3 = axios.create(s3Options)

const axiosLogin = axios.create({
    ...options,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

const axiosWithAuth = axios.create({
    ...options,
    headers: {
        'Content-Type': 'application/json'
    }
})

const AxiosDefault = axios.create({
    ...options,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                await authService.getNewTokens()
                return axiosWithAuth.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeFromStorage()
            }
        }

        throw error
    }
)

export { AxiosDefault, axiosLogin, AxiosS3, axiosWithAuth }

