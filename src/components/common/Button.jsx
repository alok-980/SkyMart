const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
    const base =
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-5 py-3 transition-all duration-200 cursor-pointer'
    const variants = {
        primary: 'bg-accent text-accent-text hover:brightness-95 active:scale-[0.98] hover:bg-accent-light hover:scale-[0.99]',
        secondary: 'bg-transparent border border-border text-text-primary hover:bg-bg-secondary',
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
            {Icon && <Icon size={18} />}
        </button>
    )
}

export default Button