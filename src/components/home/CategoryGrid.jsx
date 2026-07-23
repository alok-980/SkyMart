import { NavLink, useNavigate } from 'react-router'
import { ArrowRight, Laptop, Shirt, Gem, Package } from 'lucide-react'
import { useContext } from 'react'
import { MyStore } from '../../context/ProductContext.jsx'

const categoryIcons = {
    electronics: Laptop,
    jewelery: Gem,
    "men's clothing": Shirt,
    "women's clothing": Shirt,
}

const CategoryGrid = () => {
    const { product, categoryOptions } = useContext(MyStore)
    const navigate = useNavigate()

    const categories = categoryOptions
        .filter((cat) => cat !== 'All Categories')
        .map((cat) => ({
            name: cat,
            count: product.filter((p) => p.category === cat).length,
            icon: categoryIcons[cat] || Package,
        }))

    const handleCategoryClick = (categoryName) => {
        navigate(`/products?category=${encodeURIComponent(categoryName)}`)
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-[20px] font-display font-bold text-text-primary">Shop by Category</h2>
                <NavLink to="/products" className="text-accent text-[14px] flex items-center gap-1">
                    View All <ArrowRight size={16} />
                </NavLink>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        className="bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <cat.icon size={32} className="text-neutral-800 mb-3" />
                        <p className="font-bold text-[14px] text-neutral-600 capitalize">{cat.name}</p>
                        <p className="text-neutral-500 text-xs">{cat.count} items</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryGrid