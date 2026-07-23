import { Star, ShoppingCart, Check } from 'lucide-react'
import { useContext } from 'react'
import { MyStore } from '../../context/ProductContext'
import { useNavigate } from 'react-router'

const ProductCard = ({ product, havInCart }) => {

    const { addToCart } = useContext(MyStore)
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/products/${product.id}`)}
            className="bg-surface border border-border rounded-3xl overflow-hidden flex flex-col cursor-pointer hover:border-accent shadow-lg shadow-transparent hover:shadow-accent/10 transition-all duration-400">
            <div className="relative bg-white p-7 hover:p-5 transition-[padding] duration-400 ease-in-out">
                <span className="absolute top-2 left-2 bg-gray-800/80 text-white text-[10px] font-medium px-3 py-1 rounded-full">
                    {product.category}
                </span>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-square object-contain"
                />
            </div>

            <div className="p-4 flex flex-col flex-1">
                <p className="text-text-secondary text-xs mb-1">{product.category}</p>
                <h3 className="font-display font-bold text-sm text-text-primary mb-2 leading-snug line-clamp-2 min-h-[2.75rem]">
                    {product.title}
                </h3>

                <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            size={10}
                            className={
                                i < product.rating.rate
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-text-muted text-text-muted'
                            }
                        />
                    ))}
                    <span className="text-text-muted text-xs ml-1">({product.rating.count})</span>
                </div>

                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                    <p className="text-accent font-display font-bold text-lg">${product.price.toFixed(2)}</p>

                    {
                        havInCart ? (
                            <button
                                // onClick={() => addToCart(product.id)}
                                className="flex items-center gap-1.5 bg-green-500/10 border border-green-600 text-green-600 font-semibold text-xs px-4 py-2 rounded-xl hover:brightness-95 transition-all active:scale-95 cursor-pointer">
                                <Check size={14} />
                                Added
                            </button>
                        ) : (
                            <button
                                onClick={() => addToCart(product.id)}
                                className="flex items-center gap-1.5 bg-accent text-accent-text font-semibold text-xs px-4 py-2 rounded-xl hover:brightness-95 transition-all active:scale-95 cursor-pointer">
                                <ShoppingCart size={14} />
                                Add
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard