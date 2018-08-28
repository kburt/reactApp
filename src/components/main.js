import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Search from './search';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
    </Switch>
)

export default Main;