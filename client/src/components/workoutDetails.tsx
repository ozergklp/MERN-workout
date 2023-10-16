import React from 'react';
import { Workout } from '../types/workoutType';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWorkout } from '../redux/Features/workoutSlice';
import { RootState } from '../redux/store';

type Props = {
    workout: Workout;
};

const WorkoutDetails: React.FC<Props> = ({ workout }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user?.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch(deleteWorkout(workout._id))
        }
    }
    return (
        <li className=" p-2 m-3 shadow-lg rounded-xl">
            <h4>{workout.title}</h4>
            <p>
                <strong>Load (kg): </strong>
                {workout.load}
            </p>
            <p>
                <strong>Number of reps: </strong>
                {workout.reps}
            </p>
            <p>{workout.createdAt}</p>
            <button onClick={handleClick}>delete</button>
        </li>
    );
};

export default WorkoutDetails;