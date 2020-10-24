import React from 'react';
import { useRoutes } from 'react-router-dom';

// Routable Pages
import Home from './Home';
import Profile from './Profile';

function Routes() {
    const routesArray = [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/profile',
            element: <Profile />
        }
    ]
    
    const routes = useRoutes(routesArray);
    return routes;
}

export default Routes;
