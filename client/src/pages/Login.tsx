import React, { useState } from 'react'
import { useLogin } from "../hooks/useLogin"

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {Login, error, isLoading} = useLogin()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    
        await Login(email, password)
    }

    return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        
        <label>Email address:</label>
        <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            autoComplete='username'
        />
        <label>Password:</label>
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            autoComplete="current-password" 
        />

        <button disabled={isLoading}>Log in</button>
        {error !== 'false' && <div className="error">{error}</div>}
    </form>
    )
}
