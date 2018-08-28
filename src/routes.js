import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


import Welcome from './components/Welcome/welcome';
import Home from './components/Home/home';


const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>

</Switch>
</BrowserRouter>
);
export default Routes;
