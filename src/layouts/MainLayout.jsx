import { Outlet } from 'react-router'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-bg">
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    )
}

export default MainLayout