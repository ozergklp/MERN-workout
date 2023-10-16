import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/Features/authSlice';
import { setWorkouts } from '../redux/Features/workoutSlice';


export  function useLogout() {
    const dispatch = useDispatch();

    const Logout = () => {
        localStorage.removeItem('user')

        dispatch(logout())
        dispatch(setWorkouts([]))
    }

    return { Logout }
}
