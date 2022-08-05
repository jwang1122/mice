import { useNavigate } from 'react-router-dom'

const Reports = () => {
    const navigate = useNavigate();
    const createNavigator = to => () => navigate(to)

    // function that returns function that navigates to 'name'

    return (
        <ul>

            <li><a onClick={createNavigator("/mousecount")}>mouse count</a></li><br />
            <li><a onClick={createNavigator("/report1")}>report 1</a></li><br />
            <li><a onClick={createNavigator("/report2")}>report 2</a></li><br />
            <li><a onClick={createNavigator("/report3")}>report 3</a></li><br />
        </ul>
    )
}

export default Reports