import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/Features/authSlice';


export  function useLogout() {
    const dispatch = useDispatch();

    const Logout = () => {
        localStorage.removeItem('user')

        dispatch(logout())
    }

    return { Logout }
}
