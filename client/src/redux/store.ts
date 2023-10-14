import { configureStore } from '@reduxjs/toolkit';
import WorkoutReducer from './Features/workoutSlice';

export const store = configureStore({
    reducer: {
        workouts: WorkoutReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;