import express, { Router, Request, Response } from 'express';
import { loginUser, signupUser } from '../controllers/userController';

export const userRouter: Router = express.Router();

// login route
userRouter.post('/login', loginUser)

// signup route
userRouter.post('/signup', signupUser)