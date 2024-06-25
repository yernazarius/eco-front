import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosLogin } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
    async main(type: 'login', data: IAuthForm) {
        const response = await axiosLogin.post<IAuthResponse>(
            `auth/${type}`,
            data
        )

        if (response.data.access_token) {
            saveTokenStorage(response.data.access_token)
        }

        return response
    },

    async getNewTokens() {
        const response = await axiosLogin.post<IAuthResponse>(
            '/auth/refresh'
        )

        if (response.data.access_token) {
            saveTokenStorage(response.data.access_token)
        }

        return response
    },

    async logout() {
        const response = await axiosLogin.post<IAuthResponse>('/auth/logout')

        if (response.data) {
            removeFromStorage()
        }

        return response
    }
}