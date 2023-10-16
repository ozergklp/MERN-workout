import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import {  RouteObject } from 'react-router-dom'; 
import './style.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Providers } from './redux/provider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { RootState } from './redux/store';
import { useSelector } from 'react-redux';


export default function App() {
    const user = useSelector((state: RootState) => state.user.user);
    

    const routes: RouteObject[] = createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path="/" element={user ?  <Home /> : <Navigate to="/login"/> }  />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}  />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <Providers>
            <RouterProvider router={router}  />
        </Providers>
            
        
    )
}
