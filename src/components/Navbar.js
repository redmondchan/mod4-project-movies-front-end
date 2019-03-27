import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const Navbar = (props) =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>SignUp</NavLink>
    <NavLink to="/AllMovies" exact style={link} activeStyle={{background: 'darkblue'}}>All Movies</NavLink>
    <NavLink to="/Upcoming" exact style={link} activeStyle={{background: 'darkblue'}}>Upcoming</NavLink>
    <NavLink to="/topRated" exact style={link} activeStyle={{background: 'darkblue'}}>Top Rated</NavLink>
    <NavLink to="/Popular" exact style={link} activeStyle={{background: 'darkblue'}}>Popular</NavLink>
    <NavLink to="/Favorites" exact style={link} activeStyle={{background: 'darkblue'}}>Favorites</NavLink>
    <button onClick={props.signOut}>Log out</button>
  </div>;

export default Navbar
