import Cookies from 'js-cookie'

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
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: '194.110.55.21',  // Replace with your actual domain
        sameSite: 'strict',
        expires: 1,
        path: '/'  // Ensure the cookie is available for the entire domain
    })
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN, {
        domain: '194.110.55.21',  // Ensure the domain is specified when removing the cookie
        path: '/'  // Ensure the path is specified when removing the cookie
    })
}