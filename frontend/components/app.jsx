import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// import WelcomeContainer from './welcome/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import DashboardContainer from './dashboard/dashboard_container';
import UserShowContainer from './dashboard/user_show_container';
import ExploreContainer from './dashboard/explore_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div className='app'>
        <NavigationBarContainer />

        <Switch>
            <ProtectedRoute exact path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
            <AuthRoute exact path='/login' component={LogInFormContainer}/>
            <AuthRoute exact path='/' component={SignUpFormContainer}/>
            <Route exact path='/explore' component={ExploreContainer}/>

            {/* <Route exact path='/' component={WelcomeContainer}/> */}
        </Switch>
    </div>
);

export default App;