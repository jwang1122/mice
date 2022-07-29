import React, { useState } from 'react';

import Login from './components/Login.js';
import Home from './components/Home.js';
import MainHeader from './components/MainHeader.js';
import Signup from './components/Signup.js';

function App() {
  const title = "My Web Application"
  document.title = title;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  React.useEffect(() => {
    const hasUserloggedIn = localStorage.getItem("isLoggedIn")
    if (hasUserloggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader title={title} isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        <Signup/>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
