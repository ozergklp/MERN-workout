export type Workout = {
    createdAt: string;
    load: number;
    reps: number;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
};

export type Workouts = {
    workouts: Workout[];
}
