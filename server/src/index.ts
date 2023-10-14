import express, {Express, Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import { router } from './routes/workouts';
import cors from 'cors'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

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
app.use('/api/workouts', router)

// connect to db
mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        // listen
        app.listen(process.env.PORT, () => {
            console.log('listening port 4000 with mongoose!')
        })
    })
    .catch((e) => console.log('HEY', e))


