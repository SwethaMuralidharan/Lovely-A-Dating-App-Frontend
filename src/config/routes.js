import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/splash';
import AllUsers from '../components/allusers';
import Home from '../components/home';



export default (
	<Switch>
    <Route exact path='/' component={ Splash }/>
		<Route path='/profiles' component={ AllUsers }/>
		<Route path='/home/:user_id' component={ Home }/>
  </Switch>
)
