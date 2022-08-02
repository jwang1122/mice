import React from 'react';
import useFetch from '../hooks/UseFetch.js'

const AuthContext = React.createContext({
    url: '',
    user: null,
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});

const Component = props => {
    const [data, loadError, load] = useFetch(props.url + "/users/" + props.email)
    return null
}

export const AuthContextProvider = (props) => {
    const url = 'http://localhost:5000'
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [user, setUser] = React.useState();

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
    }
    if (user) {
        console.log(user)
        // if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        //     localStorage.setItem("isLoggedIn", 1)
        //     setIsLoggedIn(true)
        // } else {
        //     localStorage.setItem("isLoggedIn", 0)
        //     setIsLoggedIn(false)
        // }
    }

    return (<AuthContext.Provider value={
        {
            url: url,
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }
    }><Component url={url}/>{props.children}</AuthContext.Provider>);
};
export default AuthContext;