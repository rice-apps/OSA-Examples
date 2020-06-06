import React from 'react';
import { Switch, Route } from 'react-router';
import Example1 from './Example1';
import Example2 from './Example2';

const routesArray = [
    {
        path: "/example1",
        component: Example1
    },
    {
        path: "/example2",
        component: Example2
    }
]

function App() {
    return (
        <Switch>
            {routesArray.map(route => (<Route path={route.path} component={route.component} />))}
        </Switch>
    );
}

export default App;
