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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NavLink to="/AllMovies" className="nav-link">All Movies</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/Upcoming" className="nav-link">Upcoming</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/topRated" className="nav-link">Top Rated</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/Popular" className="nav-link">Popular</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/Favorites" className="nav-link">Favorites</NavLink>
        </li>
        <li class="nav-item">
          {localStorage.token ? <NavLink className="nav-link" onClick={props.signOut}>Log out</NavLink> : <NavLink to="/" className="nav-link">Log In</NavLink> }
        </li>
      </ul>
    </nav>
  </div>;

export default Navbar
