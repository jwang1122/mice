import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const hasUserloggedIn = localStorage.getItem("isLoggedIn")
        if (hasUserloggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);
    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", 0)
        setIsLoggedIn(false)
    };
    const loginHandler = (email, password) => {
        console.log(email, password);
        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            localStorage.setItem("isLoggedIn", 1)
            setIsLoggedIn(true)
        } else {
            localStorage.setItem("isLoggedIn", 0)
            setIsLoggedIn(false)
        }
    };
    return (<AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>);
};
export default AuthContext;