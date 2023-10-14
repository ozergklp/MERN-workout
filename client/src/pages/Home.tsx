import { useEffect } from "react"
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm';
import { useDispatch, useSelector } from 'react-redux';
import { setWorkouts } from '../redux/Features/workoutSlice';
import { RootState } from '../redux/store';

export default function Home() {
    const dispatch  = useDispatch();
    const workouts = useSelector((state: RootState) => state.workouts.workouts);
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()
    
            if (response.ok) {
                //setWorkouts(json)
                dispatch(setWorkouts(json))
            }

            console.log(json)
        }
    
        fetchWorkouts()
    }, [])
    
    return (
        <main className='mx-10'>
            <section className='flex '>
                <ul className='flex flex-col w-2/3'>
                    {workouts && workouts.map(workout => (
                        <WorkoutDetails workout={workout} key={workout._id} />
                    ))}
                </ul>
                <WorkoutForm />

            </section>
        </main>
    )
}
