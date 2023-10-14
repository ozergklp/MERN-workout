import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {  RouteObject } from 'react-router-dom'; 
import './style.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Providers } from './redux/provider';

export default function App() {
    

    const routes: RouteObject[] = createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path="/" element={<Home />} />
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <Providers>
            <RouterProvider router={router}  />
        </Providers>
            
        
    )
}