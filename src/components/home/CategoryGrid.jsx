import { NavLink } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { categories } from '../../data/categories'

const CategoryGrid = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-[20px] font-display font-bold text-text-primary">Shop by Category</h2>
                <NavLink
                    to="/products"
                    className="text-accent text-[14px] flex items-center gap-1"
                >
                    View All <ArrowRight size={16} />
                </NavLink>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        to="/products"
                        className="bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
                    >
                        <cat.icon size={32} className="text-neutral-800 mb-3" />
                        <p className="font-bold text-[14px] text-neutral-600">{cat.name}</p>
                        <p className="text-neutral-500 text-xs">{cat.count} items</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default CategoryGrid