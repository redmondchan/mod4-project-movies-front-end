import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>SignUp</NavLink>
    <NavLink to="/Upcoming" exact style={link} activeStyle={{background: 'darkblue'}}>Upcoming</NavLink>
    <NavLink to="/topRated" exact style={link} activeStyle={{background: 'darkblue'}}>Top Rated</NavLink>
    <NavLink to="/Popular" exact style={link} activeStyle={{background: 'darkblue'}}>Popular</NavLink>
    <NavLink to="/Favorites" exact style={link} activeStyle={{background: 'darkblue'}}>Favorites</NavLink>
  </div>;

export default Navbar
