import { Zap, Package, Users, Star, Truck } from 'lucide-react'

const stats = [
    { icon: Package, value: '20K+', label: 'Products' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Star, value: '4.9', label: 'Avg. Rating' },
    { icon: Truck, value: '99%', label: 'On-time Delivery' },
]

const AboutHero = () => {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
                <Zap size={28} className="text-accent-text fill-accent-text" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4">
                About <span className="text-accent">SkyMart</span>
            </h1>

            <p className="text-text-muted text-[18px] max-w-2xl mx-auto mb-16">
                SkyMart is a next-generation e-commerce platform built to make online shopping fast,
                fair, and enjoyable — for everyone.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s) => (
                    <div key={s.label} className="border bg-text-muted/5 rounded-2xl py-4 px-4">
                        <s.icon size={20} className="text-accent mx-auto mb-3" />
                        <p className="text-2xl font-display font-bold text-text-primary">{s.value}</p>
                        <p className="text-text-muted text-xs mt-1">{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutHero