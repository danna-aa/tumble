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
import PostShowContainer from './dashboard/post_show_container';
import UserLikesContainer from './dashboard/user_likes_container';
import Modal from './modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
    <div className='app'>
        <Modal />
        <NavigationBarContainer />

        <Switch>
            <ProtectedRoute exact path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
            <ProtectedRoute exact path='/posts/:postId' component={PostShowContainer}/>
            <ProtectedRoute exact path='/likes' component={UserLikesContainer}/>
            <AuthRoute exact path='/login' component={LogInFormContainer}/>
            <AuthRoute exact path='/' component={SignUpFormContainer}/>
            <ProtectedRoute exact path='/explore' component={ExploreContainer}/>

            {/* <Route exact path='/' component={WelcomeContainer}/> */}
        </Switch>
    </div>
);

export default App;