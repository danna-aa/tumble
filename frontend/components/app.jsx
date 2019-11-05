import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <NavigationBarContainer />

        <Switch>
            {/* <ProtectedRoute exact path='/dashboard' component={dashboardContainer}> */}
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            <Route path='/' component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;