import jwt, {JwtPayload} from 'jsonwebtoken'
import User from '../models/userModel'
import { NextFunction, Request, Response } from 'express'

interface User {
    _id: string;
    // other user properties
}

interface CustomRequest extends Request {
    user?: User; // Define the user property on the custom Request interface
}

export const reqAuth =async (req: CustomRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET) as { _id: string };
        req.user = await User.findOne({ _id }).select('_id');
        next()
    } catch (error) {
        res.status(401).json({error: 'Request is not authorized'})
    }
    
    

}