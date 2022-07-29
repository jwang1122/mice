import React from 'react';
import Navigation from './Navigation.js';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>{props.title}</h1>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />

    </header>
  );
};

export default MainHeader;
