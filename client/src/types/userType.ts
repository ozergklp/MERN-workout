export interface User {
    email: string;
    token: string;
}

export interface Error {
    error: string;
}

export type Json = User | Error ;

export interface AuthState {
    user: User | null;
}