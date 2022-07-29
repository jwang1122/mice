import React from 'react';

import Navigation from './Navigation3.js';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
