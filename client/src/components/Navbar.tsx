import { Link, Outlet } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Features/authSlice';

export default function Navbar() {
    const { Logout } = useLogout();
    const dispatch = useDispatch()
    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            dispatch(login(JSON.parse(user)))
            
        }
    }, [])
    const user = useSelector((state : RootState) => state.user.user)
    

    const handleClick = () => {
        Logout();
    }
    return (
        <>
            <nav>
                <ul className='p-6 mx-10 mb-5 flex'>
                    <li className='text-3xl font-bold flex-1'>
                        <Link to="/">Workout Buddy</Link>
                    </li>
                    {user ? (
                        <li className='text-lg mr-4 flex'>
                            <p className='mr-5 mt-1'>{user.email }</p>
                            <button onClick={handleClick}>Log out</button>
                        </li>
                    ) : (
                        <>
                        <li className='text-lg mr-4'>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className='text-lg mr-4'>
                            <Link to="/signup">Signup</Link>
                        </li>
                        </>                
                    )}

                </ul>
            </nav>
            <Outlet />
        </>
    )
}
