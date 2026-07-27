import { createContext, useState } from "react";

export const Auth = createContext()

export const AuthContext = ({ children }) => {

    const [registerUsers, setRegisterUsers] = useState(
        JSON.parse(localStorage.getItem('skyMartUsers')) || []
    )
    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem('loggedUser'))
    )

    return <Auth.Provider value={{
        registerUsers,
        setRegisterUsers,
        loggedInUser,
        setLoggedInUser,
    }}>{children}</Auth.Provider>
}