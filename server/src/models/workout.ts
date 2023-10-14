import mongoose, { Schema, Document } from 'mongoose';

interface IWorkout extends Document {
    title: string;
    reps: number;
    load: number;
}

const workoutSchema : Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default  mongoose.model<IWorkout>('Workout', workoutSchema)