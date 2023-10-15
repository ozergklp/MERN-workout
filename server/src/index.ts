import express, {Express, Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import { workoutRouter } from './routes/workout';
import { userRouter } from './routes/user';
import cors from 'cors'
import mongoose from 'mongoose';


dotenv.config();

// express app
const app: Express = express();

// middleware
app.use(cors())
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts', workoutRouter)
app.use('/api/user', userRouter)

// connect to db
mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        // listen
        app.listen(process.env.PORT, () => {
            console.log('listening port 4000 with mongoose!')
        })
    })
    .catch((e) => console.log('HEY', e))


