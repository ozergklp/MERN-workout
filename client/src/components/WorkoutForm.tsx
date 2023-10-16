import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWorkout } from '../redux/Features/workoutSlice';
import { RootState } from '../redux/store';
export default function WorkoutForm ()  {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const [title, setTitle] = useState<string>('')
    const [load, setLoad] = useState<string>('')
    const [reps, setReps] = useState<string>('')
    const [error, setError] = useState<string>('no-error')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const workout = {title, load, reps}
        
        const response = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError('no-error')
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added:', json)
            dispatch(addWorkout(json))
        }

    }

    return (
        <form className="flex flex-col shadow-lg rounded-xl p-2 m-3  flex-1 " onSubmit={handleSubmit}> 
        <h3 className='text-xl font-semibold'>Add a New Workout</h3>

        <label>Excersize Title:</label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            
        />

        <label>Load (in kg):</label>
        <input 
            type="number" 
            onChange={(e) => setLoad(e.target.value)} 
            value={load}
        />

        <label>Number of Reps:</label>
        <input 
            type="number" 
            onChange={(e) => setReps(e.target.value)} 
            value={reps} 
        />

        <button>Add Workout</button>
        {error !== 'no-error' && <div className="error">{error}</div>}
        </form>
    )
}
