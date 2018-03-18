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
import EditEvent from './components/EditEvent';
import EditCenter from './components/EditCenter';


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Route exact path="/dashboard" component={Allevents}/>
      <Route exact path="/center/:centerId/addevent" component={AddEvent}/>
      <Route exact path="/addcenter" component={AddCenter}/>
      <Route exact path="/events/:eventId" component={EventDetails}/>
      <Route path="/centers/:centerId" component={CenterDetails}/>
      <Route exact path="/allcenters/" component={TrendingCenters}/>
      <Route exact path="/edit/center/" component={EditCenter}/>
      <Route exact path="/allevents/" component={PopularCenter}/>
      <Route exact path="/manage/events/" component={UserEvent}/>
      <Route exact path="/events/:eventId/edit" component={EditEvent}/>

    </Switch>
  </BrowserRouter>
);
