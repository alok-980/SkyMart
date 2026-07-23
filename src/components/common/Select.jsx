import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Select = ({ options, value, onChange, className = '' }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={ref} className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center justify-between gap-3 font-display bg-text-muted/10 text-[14px] border rounded-2xl px-5 py-2.5 text-text-primary font-medium transition-colors cursor-pointer ${open ? 'border-accent' : 'border-border'
                    }`}
            >
                {value}
                <ChevronDown
                    size={16}
                    className={`text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {open && (
                <div className="absolute z-20 top-full mt-2 w-full bg-bg-secondary border border-border rounded-xl overflow-hidden shadow-xl flex flex-col gap-1 p-2">
                    {options.map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => {
                                onChange(opt)
                                setOpen(false)
                            }}
                            className={`w-full text-left px-4 py-2 font-medium transition-colors cursor-pointer text-[14px] rounded-xl ${opt === value
                                    ? 'bg-accent text-accent-text'
                                    : 'text-text-primary hover:bg-white/10'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select