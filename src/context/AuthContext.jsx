import { createContext, useContext, useState } from 'react'
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../utils/auth.js'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrentUser())

    const register = (data) => {
        return registerUser(data)
    }

    const login = (data) => {
        const result = loginUser(data)
        if (result.success) setUser(result.user)
        return result
    }

    const logout = () => {
        logoutUser()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)