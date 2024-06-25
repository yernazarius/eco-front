export interface IAuthForm {
    username: string
    password: string
}

export interface IUser {
    id: number
    username: string
    full_name?: string
    email: string
    role: string


}

export interface IAuthResponse {
    access_token: string
    refresh_token: string
    user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }