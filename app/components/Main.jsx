const React = require('react');
const Navbar = require('Navbar');
const Profile = require('Profile');
const HomePage = require('HomePage');
const BookAppointment = require('BookAppointment');
import {HashRouter as Router,Route,Link} from 'react-router-dom';
const Main = () => (
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/BookAppointment" component={BookAppointment}/>
    </div>
	</Router>
)
module.exports = Main;
// export default Main;