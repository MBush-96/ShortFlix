import { useState, createContext, useEffect} from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    const fetchUser = () => {
        localStorage.getItem('userId') &&
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/verify`, {
                headers: {
                    Authorization: localStorage.getItem('userId')
                }
            }).then(res => {
                console.log(res);
                setUser(res.data.user)
                console.log(user);
            }).catch(error => {
                console.log(error);
                localStorage.removeItem('userId')
            })
    }

    const state = {
        userState: [user, setUser],
        fetchUser: fetchUser
    }

    useEffect( fetchUser, [])
    return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }