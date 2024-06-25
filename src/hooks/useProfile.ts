import { useEffect, useState } from 'react';
import { userService } from '@/services/user.service';
import { IProfileResponse } from '@/services/user.service';

export function useProfile() {
    const [data, setData] = useState<IProfileResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await userService.getProfile();
                setData(profileData);
                setIsSuccess(true);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setIsSuccess(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { data, isLoading, isSuccess };
}
