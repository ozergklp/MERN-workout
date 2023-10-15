import React, { useState } from 'react'

export default function Signup() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log(email, password)
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

        <button>Sign up</button>
    </form>
    )
}
