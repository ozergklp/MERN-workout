import express, { Router, Request, Response } from 'express';
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, uptadeWorkout } from '../controllers/workoutController';

export const workoutRouter: Router = express.Router();

// GET all workouts
workoutRouter.get('/', getWorkouts);

// GET a single workout
workoutRouter.get('/:id', getWorkout);

// POST a new workout
workoutRouter.post('/', createWorkout);

// DELETE a workout
workoutRouter.delete('/:id', deleteWorkout);

// UPDATE a workout
workoutRouter.patch('/:id', uptadeWorkout);
