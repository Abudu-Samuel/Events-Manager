import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Signup from './components/Signup';
import Signin from './components/SignIn';
import Allevents from './components/Allevents';
import AddEvent from './components/AddEvent';
import AddCenter from './components/AddCenter';
import EventDetails from './components/EventDetails';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/allevents" component={Allevents}/>
            <Route exact path="/addevent" component={AddEvent}/>
            <Route exact path="/addcenter" component={AddCenter}/>
            <Route exact path="/eventdetails" component={EventDetails}/>
        </Switch>
    </BrowserRouter>
);
