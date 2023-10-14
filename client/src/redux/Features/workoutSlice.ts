import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Workout, Workouts} from '../../types/workoutType';

const initialState: Workouts = {
    workouts: []
}

export const workoutSlice = createSlice({
    name: 'Workouts',
    initialState,
    reducers:{
        addWorkout: (state, action: PayloadAction<Workout>) => {
            return {
                ...state,
                workouts: [...state.workouts, action.payload]
            }
        },
        setWorkouts : (state, action: PayloadAction<Workout[]>) => {
            state.workouts = action.payload;
        },
        deleteWorkout: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                workouts: state.workouts.filter(workout => workout._id !== action.payload)
            }
        }
    }
})

export const { addWorkout, setWorkouts, deleteWorkout} = workoutSlice.actions;

export default workoutSlice.reducer;