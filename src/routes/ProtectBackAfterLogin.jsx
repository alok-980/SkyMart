import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { useContext } from 'react'

const ProtectBackAfterLogin = () => {
  const { loggedInUser } = useContext(Auth)

  return loggedInUser ? <Navigate to="/home" replace /> : <Outlet />;
}

export default ProtectBackAfterLogin