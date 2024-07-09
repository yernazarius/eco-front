import Cookies from 'js-cookie'
import config from '@/config/config';


export enum EnumTokens {
    'ACCESS_TOKEN' = 'access_token',
    'REFRESH_TOKEN' = 'refresh_token'
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

// export const saveTokenStorage = (accessToken: string) => {
//     Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
//         domain: 'localhost',
//         sameSite: 'strict',
//         expires: 1
//     })
// }

// export const removeFromStorage = () => {
//     Cookies.remove(EnumTokens.ACCESS_TOKEN)
// }


export const saveTokenStorage = (accessToken: string) => {
    if (config.MODE === 'development') {
        Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
            domain: config.BASE_URL,
            sameSite: 'strict',
            expires: 1,
        })
    }
    else if (config.MODE === 'production') {
        Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
            domain: config.BASE_URL,
            sameSite: 'strict',
            expires: 1,
            path: '/'
        })
    }
}

export const removeFromStorage = () => {
    if (config.MODE === 'development') {
        Cookies.remove(EnumTokens.ACCESS_TOKEN)
    }
    else if (config.MODE === 'production') {
        Cookies.remove(EnumTokens.ACCESS_TOKEN, {
            domain: config.BASE_URL,
            path: '/'
        })
    }

}