import { Package, TrendingUp, Star, Tag } from 'lucide-react'
import { useContext } from 'react'
import { MyStore } from '../../context/ProductContext'

const QuickStats = ({
    topRatedProducts,
    categoryOptions
}) => {

    const { cartTotalValue, cartItem } = useContext(MyStore)

    const stats = [
        { icon: Package, iconBg: 'bg-accent/20 text-accent', value: `${cartItem.length}`, label: 'Cart Items', sub: 'In your bag' },
        { icon: TrendingUp, iconBg: 'bg-blue-500/20 text-blue-400', value:`$ ${cartTotalValue.toFixed(2)}`, label: 'Cart Value', sub: 'Ready to checkout' },
        { icon: Star, iconBg: 'bg-orange-500/20 text-orange-400', value: `${topRatedProducts.length}`, label: 'Top Products', sub: 'Highly rated' },
        { icon: Tag, iconBg: 'bg-purple-500/20 text-purple-400', value: `${topRatedProducts.length - 1}`, label: 'Categories', sub: 'To explore' },
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-text-muted/5">
            {stats.map((s) => (
                <div key={s.label} className="border rounded-2xl p-5 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>
                        <s.icon size={20} />
                    </div>
                    <div>
                        <p className="text-2xl font-display font-bold text-text-primary">{s.value}</p>
                        <p className="text-text-secondary text-sm font-medium">{s.label}</p>
                        <p className="text-text-muted text-xs">{s.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuickStats