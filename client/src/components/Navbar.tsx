import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className='p-6 mx-10 mb-5 '>
                    <li className='text-3xl font-bold'>
                        <Link to="/">Workout Buddy</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
