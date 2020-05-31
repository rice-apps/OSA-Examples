import React from 'react';
import { Switch, Route } from 'react-router';
import Example1 from './Example1';

const routesArray = [
    {
        path: "/example1",
        component: Example1
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
