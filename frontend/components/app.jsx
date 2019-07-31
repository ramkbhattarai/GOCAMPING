import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/splash_container'

import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
    
            <NavBarContainer />
     
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/" component={SplashContainer}/>
        </Switch>
    </div>
);

export default App;