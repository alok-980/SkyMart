import { NavLink } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/common/Button.jsx'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
            <p className="text-7xl font-display font-bold text-accent mb-4">404</p>
            <h1 className="text-2xl font-display font-bold text-text-primary mb-2">Page not found</h1>
            <p className="text-text-secondary mb-8">
                The page you're looking for doesn't exist or you don't have access to it.
            </p>
            <NavLink to="/home">
                <Button icon={ArrowLeft}>Back to Home</Button>
            </NavLink>
        </div>
    )
}

export default NotFound