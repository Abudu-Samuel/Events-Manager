import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import App from './components/app';
import Signup from './components/User/Signup';
import Signin from './components/User/SignIn';
import Allevents from './components/common/Allevents';
import AddEvent from './components/Event/AddEvent';
import AddCenter from './components/Center/AddCenter';
import TrendingCenters from './components/Center/TrendingCenters';
import PopularCenter from './components/Event/PopularCenter';
import EventDetails from './components/Event/EventDetails';
import CenterDetails from './components/Center/CenterDetails';
import UserEvent from './components/Event/UserEvent';
import EditEvent from './components/Event/EditEvent';
import UserCenter from './components/Center/UserCenter';
import EditCenter from './components/Center/EditCenter';
import Dashboard from './components/Center/Dashboard';
import AdminRouteProtector from './components/Hoc/AdminRouteProtector';
import RouteProtector from './components/Hoc/RouteProtector';
import NotFoundPage from './components/common/NotFoundPage';
// import NavBar from './components/common/Navbar';


export default () => (
  <Router history={history}>
    <div>
      {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/dashboard" component={RouteProtector(Allevents)}/>
        <Route exact path="/centers/:centerId/edit" component={RouteProtector(AdminRouteProtector(EditCenter))}/>
        <Route exact path="/center/:centerId/addevent" component={RouteProtector(AddEvent)}/>
        <Route exact path="/addcenter" component={RouteProtector(AdminRouteProtector(AddCenter))}/>
        <Route exact path="/events/:eventId" component={EventDetails}/>
        <Route path="/admin/dashboard" component={RouteProtector(AdminRouteProtector(Dashboard))}/>
        <Route path="/centers/:centerId" component={CenterDetails}/>
        <Route exact path="/allcenters/" component={TrendingCenters}/>
        <Route exact path="/manage/centers/" component={RouteProtector(AdminRouteProtector(UserCenter))}/>
        <Route exact path="/allevents/" component={PopularCenter}/>
        <Route exact path="/manage/events/" component={RouteProtector(UserEvent)}/>
        <Route exact path="/events/:eventId/edit" component={RouteProtector(EditEvent)}/>
        <Route exact component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);
