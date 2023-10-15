import { configureStore } from '@reduxjs/toolkit';
import WorkoutReducer from './Features/workoutSlice';
import userReducer from './Features/authSlice'

export const store = configureStore({
    reducer: {
        workouts: WorkoutReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;