import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/home'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from "./pages/error";


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/*<Route path="/share" component={ShareThoughtsPage} />*/}
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                {/*<Route path="/profile/:id" component={ProfilePage} />*/}
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation