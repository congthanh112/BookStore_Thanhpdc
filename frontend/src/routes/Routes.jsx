import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoryBar from '../view/core/categoryBar/CategoryBar';
import Home from '../view/home/Home';
import Profile from '../view/profile/Profile';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/book" component={CategoryBar} />

        </Switch>
    )
}

export default Routes;