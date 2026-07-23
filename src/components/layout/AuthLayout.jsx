import Logo from '../common/Logo.jsx'
import AuthHero from '../auth/AuthHero.jsx'

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg flex flex-col lg:flex-row">
            <div className="flex lg:hidden justify-center pt-12 pb-2">
                <Logo />
            </div>

            <AuthHero />

            <div className="flex-1 flex items-center justify-center px-6 py-10">{children}</div>
        </div>
    )
}

export default AuthLayout