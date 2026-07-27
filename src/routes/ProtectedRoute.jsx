import { Navigate } from 'react-router'
import { Auth } from '../context/AuthContext'
import { useContext } from 'react'

const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(Auth)

    if (!loggedInUser) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute