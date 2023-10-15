import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log('Signup.tsx',email, password)
        await signup(email, password)

        setEmail('')
        setPassword('')
    }

    return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3>Sign Upasd</h3>
        
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

        <button disabled={isLoading}>Sign up</button>
        {error !== 'false' && <div className="error">{error}</div>}
    </form>
    )
}
