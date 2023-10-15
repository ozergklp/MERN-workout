import express, { Router, Request, Response } from 'express';
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, uptadeWorkout } from '../controllers/workoutController';
import { reqAuth } from '../middleware/reqAuth';

export const workoutRouter: Router = express.Router();

workoutRouter.use(reqAuth)

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
