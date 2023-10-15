import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className='p-6 mx-10 mb-5 flex'>
                    <li className='text-3xl font-bold flex-1'>
                        <Link to="/">Workout Buddy</Link>
                    </li>
                    <li className='text-lg'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='text-lg'>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
