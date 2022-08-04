// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import UserList from './UserList.js'
import UserDetails from './UserDetails.js'
import updateItem from '../lib/update.js'
import AuthContext from './auth-context.js'

function Home(props) {
    const [users, setUsers] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [user, setUser] = useState(null)
    const authCtx = useContext(AuthContext);

    const url = authCtx.url
    const [data, loadError, load] = useFetch(url + '/users')

    useEffect(() => {
        if (!loadError && data && data.users.length > 0) {
            setUsers(data.users)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        console.log(mouse)
        setIsDetails(true)
        setUser(mouse)
    }

    const updateHandler = user => {
        updateItem(url + '/users/' + user.id, user, load)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                {isDetails && <UserDetails user={user} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <UserList items={users} title="User List" url={authCtx.url} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
