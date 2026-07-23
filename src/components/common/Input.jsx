import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = ({ icon: Icon, isPassword = false, className = '', ...props }) => {
    const [show, setShow] = useState(false)
    const type = isPassword ? (show ? 'text' : 'password') : props.type || 'text'

    return (
        <div className={`relative flex items-center ${className}`}>
            {Icon && <Icon size={16} className="absolute left-4 text-text-muted pointer-events-none" />}

            <input
                {...props}
                type={type}
                className={`w-full bg-text-muted/10 border border-border rounded-2xl py-2.5 text-[15px] ${Icon ? 'pl-11' : 'pl-4'
                    } ${isPassword ? 'pr-11' : 'pr-4'} text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors`}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-4 text-text-muted hover:text-text-primary transition-colors"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    )
}

export default Input