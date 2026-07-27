import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { useContext } from 'react'

const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(Auth)

    return loggedInUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute