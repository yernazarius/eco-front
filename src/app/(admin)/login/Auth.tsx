'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IAuthForm } from '@/types/auth.types'
import { authService } from '@/services/auth.service'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export function Auth() {

    const [error, setError] = useState<string | null>(null)
    const { register, handleSubmit, reset } = useForm<IAuthForm>({
        mode: 'onChange'
    })
    const { push } = useRouter()
    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) => authService.main('login', data),
        onSuccess() {
            toast.success('Successfully login!');
            reset();
            push('/admin');
        },
        onError(err: Error) {
            setError(err.message);
            toast.error(`Login failed: ${err.message}`);
        },
    });

    const onSubmit: SubmitHandler<IAuthForm> = data => {
        console.log(data)
        mutate(data)
    }

    return (
        <div className="mt-52 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                <Image width={280} height={56} src="/logo.png" alt="Logo" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Войдите в ваш аккаунт
                </h2>
                {error &&
                    <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-md flex items-center mx-auto max-w-lg">
                        <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                            <path fill="currentColor"
                                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                            </path>
                        </svg>
                        <span className="text-red-800 "> {error} </span>
                    </div>
                }
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Введите ваш логин
                        </label>
                        <div className="mt-2">
                            <input
                                id="text"
                                {...register('username', { required: true })}
                                type="text"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                {...register('password', { required: true })}
                                type="password"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
