import React from 'react';

const AuthContext = React.createContext({
    url: '',
    users: null,
    isLoggedIn: false,
    isAdmin: false,
    onLogout: () => { },
    onLogin: () => { },
});

export const AuthContextProvider = (props) => {
    const url = 'http://localhost:5000'
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const hasUserloggedIn = localStorage.getItem("isLoggedIn")
        // if (hasUserloggedIn === '1') {
        //     setIsLoggedIn(true);
        // }

    }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false)
    };
    const loginHandler = (isLoggedIn) => {
        setIsLoggedIn(isLoggedIn)
    }

    return (
        <AuthContext.Provider
            value={{
                url: url,
                users: null,
                isLoggedIn: isLoggedIn,
                isAdmin: false,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}>{props.children}
        </AuthContext.Provider>
    )
};
export default AuthContext;