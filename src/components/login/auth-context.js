import React from 'react';
import useFetch from '../hooks/UseFetch.js'

const AuthContext = React.createContext({
    url: '',
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});


export const AuthContextProvider = (props) => {
    const url = 'http://localhost:5000'
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
        const [data, loadError, load] = useFetch(url + "/users/" + email)
        if (data) {
            user = data.user
            console.log(user)
            if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
                localStorage.setItem("isLoggedIn", 1)
                setIsLoggedIn(true)
            } else {
                localStorage.setItem("isLoggedIn", 0)
                setIsLoggedIn(false)
            }
        }
    };
    return (<AuthContext.Provider value={{ url: url, isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>);
};
export default AuthContext;