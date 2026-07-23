import { Zap, Shield, Tag } from 'lucide-react'

const badges = [
    { icon: Zap, color: 'text-accent', title: 'Fast Delivery', sub: 'Same-day on select items' },
    { icon: Shield, color: 'text-blue-400', title: 'Secure Payments', sub: '100% encrypted checkout' },
    { icon: Tag, color: 'text-green-400', title: 'Best Prices', sub: 'Price-match guarantee' },
]

const TrustBadges = () => {
    return (
        <div className="grid sm:grid-cols-3 gap-4 mb-20 bg-text-muted/5">
            {badges.map((b) => (
                <div key={b.title} className="border rounded-2xl p-5 flex items-center gap-4">
                    <b.icon size={22} className={b.color} />
                    <div>
                        <p className="text-text-primary font-semibold text-[14px]">{b.title}</p>
                        <p className="text-text-muted text-xs">{b.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TrustBadges