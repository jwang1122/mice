import React from 'react';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  return (
    
    <nav className={classes.nav}>
      <ul>
        <li>
        {/* {props.isLoggedIn && (<Link to="/home">Home</Link>)} */}
        </li>
        <li>
          {/* <Link to="/about">About Us</Link> */}
        </li>
        <li>
        {/* {!props.isLoggedIn && (<Link to="/">Login</Link>)} */}
        </li>
        {props.isLoggedIn && (
          <li>
            <a href="https://www.google.com/">Google</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="https://www.youtube.com/">YouTube</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}


export default Navigation;
