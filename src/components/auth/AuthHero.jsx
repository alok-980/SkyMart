import Logo from '../common/Logo.jsx'

const stats = [
    { value: '20K+', label: 'Products' },
    { value: '50K+', label: 'Users' },
    { value: '4.9★', label: 'Rating' },
]

const AuthHero = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 relative border-r overflow-hidden">
            <div className="absolute top-35 -left-25 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-35 left-120 w-72 h-72 bg-accent rounded-full blur-3xl opacity-5 pointer-events-none" />

            <div className="absolute top-14 left-16">
                <Logo size='lg' />
            </div>

            <div className="">
                <p className="text-accent text-sm font-bold tracking-widest mb-4">WELCOME BACK</p>
                <h1 className="text-5xl font-display font-bold text-text-primary leading-tight">
                    Shop the future.
                </h1>
                <h1 className="text-5xl font-display font-bold text-accent leading-tight mb-6">Today.</h1>
                <p className="text-text-muted font-semibold text-[16px] mb-10">
                    Thousands of products, lightning-fast delivery, and <br /> prices that make your wallet happy.
                </p>

                <div className="flex gap-4">
                    {stats.map((s) => (
                        <div key={s.label} className="border rounded-2xl py-4 w-full text-center">
                            <p className="text-[20px] font-display font-bold text-accent">{s.value}</p>
                            <p className="text-text-muted text-xs mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AuthHero