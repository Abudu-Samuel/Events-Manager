import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Signup from './components/Signup';
import Signin from './components/SignIn';
import Allevents from './components/Allevents';
import AddEvent from './components/AddEvent';
import AddCenter from './components/AddCenter';
import TrendingCenters from './components/TrendingCenters';
import PopularCenter from './components/PopularCenter';
import EventDetails from './components/EventDetails';
import CenterDetails from './components/CenterDetails';
import UserEvent from './components/UserEvent';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Route exact path="/dashboard" component={Allevents}/>
      <Route exact path="/addevent" component={AddEvent}/>
      <Route exact path="/addcenter" component={AddCenter}/>
      <Route exact path="/events/:eventId" component={EventDetails}/>
      <Route path="/centers/:centerId" component={CenterDetails}/>
      <Route exact path="/allcenters/" component={TrendingCenters}/>
      <Route exact path="/allevents/" component={PopularCenter}/>
      <Route exact path="/manage/events/" component={UserEvent}/>
    </Switch>
  </BrowserRouter>
);
