import { NavLink } from 'react-router'
import { LogOut } from 'lucide-react'

const MobileMenu = ({ isOpen, onClose, navLinks, pathname, onLogout }) => {
    if (!isOpen) return null

    return (
        <div className="absolute top-full left-0 right-0 z-20 md:hidden bg-bg border-b shadow-xl">
            <div className="flex flex-col px-6 py-6 gap-5">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className={`text-base font-medium transition-colors ${pathname === link.path
                            ? 'text-accent'
                            : 'text-text-secondary hover:text-text-primary'
                            }`}
                    >
                        {link.label}
                    </NavLink>
                ))}

                <button
                    onClick={() => {
                        onLogout()
                        onClose()
                    }}
                    className="flex items-center gap-2 text-base font-medium text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default MobileMenu