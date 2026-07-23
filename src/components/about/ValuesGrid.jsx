import { ShieldCheck, Truck, Heart, Star } from 'lucide-react'

const values = [
    {
        icon: ShieldCheck,
        title: 'Trust',
        desc: 'Every product is verified for quality and authenticity before listing.',
    },
    {
        icon: Truck,
        title: 'Speed',
        desc: 'We obsess over delivery times so your orders arrive when promised.',
    },
    {
        icon: Heart,
        title: 'Community',
        desc: 'Built around real customer feedback, not just business metrics.',
    },
    {
        icon: Star,
        title: 'Quality',
        desc: 'We curate the best — no filler, no junk, just great products.',
    },
]

const ValuesGrid = () => {
    return (
        <div>
            <h2 className="text-2xl font-display font-bold text-text-primary text-center mb-8">
                What We Stand For
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
                {values.map((v) => (
                    <div key={v.title} className="border bg-text-muted/5 rounded-2xl p-6 flex gap-4 shadow-lg shadow-transparent hover:border-accent hover:shadow-accent/10 transition-all duration-300">
                        <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                            <v.icon size={20} className="text-accent" />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-text-primary mb-1">{v.title}</h3>
                            <p className="text-text-muted text-sm">{v.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ValuesGrid