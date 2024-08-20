import { axiosWithAuth } from "@/api/interceptors"
import { IUser, TypeUserForm } from "@/types/auth.types"

export interface IProfileResponse {
    data: IUser
}

class UserService {
    private BASE_URL = '/user/profile'
    private ME = '/me/'

    async getProfile() {
        const response = await axiosWithAuth.get<IProfileResponse>(this.ME)
        return response.data
    }

    async update(data: TypeUserForm) {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response.data
    }
}

export const userService = new UserService()