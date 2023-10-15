import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Features/authSlice';


export  function useLogin() {
    const [error, setError] = useState<string>('false');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dipatch = useDispatch();

    const Login = async (email: string, password: string) => {
        setIsLoading(true)
        setError('false')

        const response: Response = await fetch('http://localhost:4000/api/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })

        const json  = await response.json()
        console.log('useLogin.tsx json',json)

        if(!response.ok){
            setIsLoading(false)
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

            dipatch(login(json))

            setIsLoading(false)
        }
    }

    return { Login, isLoading, error}
}
