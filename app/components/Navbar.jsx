const React = require('react');
const ReactDOM = require('react-dom');
const HomePage = require('HomePage');
const Profile = require('Profile');
const BookAppointment = require('BookAppointment');
import {HashRouter as Router,Route,Link} from 'react-router-dom';
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/BookAppointment" className="nav-link">Book Appointment</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  
);
module.exports = Navbar;

