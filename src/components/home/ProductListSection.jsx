import { NavLink } from 'react-router'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useContext } from 'react'
import { MyStore } from '../../context/ProductContext'

const ProductListSection = ({ title, icon: Icon, iconColor, products, seeAllLink }) => {

    const { cartItem, cartItemQtyIncrement, addToCart } = useContext(MyStore)

    const addOrIncrementInCart = (p) => {
        let havInCart = cartItem.find((item) => item.id === p.id)
        
        if(havInCart) {
            cartItemQtyIncrement(p.id)
        } else {
            addToCart(p.id)
        }
    }

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <Icon size={20} className={`${iconColor} fill-current`} />
                    <h3 className="text-lg font-display font-bold text-neutral-900">{title}</h3>
                </div>
                <NavLink
                    to={seeAllLink}
                    className="text-accent-dark text-sm font-medium flex items-center gap-1"
                >
                    See all <ArrowRight size={14} />
                </NavLink>
            </div>

            <div className="space-y-3">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="flex items-center justify-between border border-neutral-200 rounded-2xl p-3 shadow-lg shadow-transparent hover:border-accent/60 hover:shadow-text-secondary/30 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={p.image}
                                alt="product"
                                className="w-14 h-14 rounded-xl object-cover bg-neutral-100"
                            />
                            <p className="text-accent-dark font-display font-bold">${p.price.toFixed(2)}</p>
                        </div>
                        <button 
                            onClick={() => addOrIncrementInCart(p)}
                            className="w-9 h-9 border border-text-muted/40 hover:border-none rounded-xl bg-accent/15 flex items-center justify-center text-neutral-700 hover:text-neutral-900 hover:bg-accent transition-colors cursor-pointer">
                            <ShoppingBag size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListSection