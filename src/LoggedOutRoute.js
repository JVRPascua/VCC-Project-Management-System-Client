import React, {useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoggedOutRoute = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const auth = user?.token; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/loginpage" />;
}

export default LoggedOutRoute;