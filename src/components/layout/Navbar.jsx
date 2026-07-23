import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { ShoppingCart, LogOut } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
// import CartDrawer from '../cart/CartDrawer.jsx'
// import { cartDummyItems } from '../../data/cartDummy.js'

const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Shop', path: '/products' },
    { label: 'About', path: '/about' },
]

const Navbar = () => {
    const { pathname } = useLocation()
    // const [isCartOpen, setIsCartOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <>
            <nav
                className={`sticky top-0 z-30 bg-bg transition-colors duration-200 ${isScrolled ? 'border-b' : 'border-b border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                    <NavLink to="/home">
                        <Logo />
                    </NavLink>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={`font-medium text-sm transition-colors ${pathname === link.path
                                    ? 'text-accent'
                                    : 'text-text-secondary hover:text-text-primary'
                                    }`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 bg-text-muted/10 border border-border rounded-xl pl-2 pr-4 py-1.5">
                            <div className="w-6 h-6 rounded-lg bg-accent text-accent-text font-bold flex items-center justify-center text-xs">
                                A
                            </div>
                            <span className="text-text-secondary font-medium text-sm">Alok Chauhan</span>
                        </div>

                        <button
                            // onClick={() => setIsCartOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-primary hover:border-accent/50 hover:bg-accent/20 transition-colors cursor-pointer">
                            <ShoppingCart size={16} />
                        </button>

                        <button 
                            onClick={handleLogout}
                            className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-primary hover:text-red-400 hover:border-red-400 hover:bg-red-500/25 transition-colors cursor-pointer">
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartDummyItems}
            /> */}
        </>
    )
}

export default Navbar