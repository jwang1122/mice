import React from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    
    <nav className={classes.nav}>
      <ul>
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
