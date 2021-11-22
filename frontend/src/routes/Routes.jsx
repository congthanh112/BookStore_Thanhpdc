import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../view/layout/Layout'
import Profile from '../view/profile/Profile';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Layout}/>
                <Route path="/profile" exact component={Layout}/>
               
            </Switch>
        </BrowserRouter>
    )
}

export default Router;