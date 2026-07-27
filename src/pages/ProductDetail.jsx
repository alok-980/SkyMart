import { useContext, useEffect, useState } from 'react'
import {
    Star,
    ShoppingCart,
    Heart,
    Truck,
    Shield,
    RotateCcw,
    Check,
    ChevronLeft,
    ChevronRight,
    Minus,
    Plus,
} from 'lucide-react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { MyStore } from '../context/ProductContext.jsx'
import ProductCard from '../components/shop/ProductCard.jsx'
import ProductDetailSkeleton from '../components/shop/ProductDetailSkeleton.jsx'

const ProductDetail = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [visitedHistory, setVisitedHistory] = useState([])
    const { product, cartItem, addToCart, cartItemQtyIncrement, cartItemQtyDecrement, removeCartItem, setIsCartOpen } = useContext(MyStore)

    let { id } = useParams()
    const navigate = useNavigate()

    const getSingleProduct = async () => {
        setIsLoading(true)
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setTimeout(() => {
                setIsLoading(false)
                setSingleProduct(res.data)
            }, 100)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [id])

    const isInCart = cartItem.find((item) => item.id === singleProduct.id)

    const decreseOrRemove = (isInCart) => {
        if (isInCart.qty <= 1) {
            removeCartItem(isInCart.id)
        } else {
            cartItemQtyDecrement(isInCart.id)
        }
    }

    const relatedProductsData = product.filter((item) => item.category === singleProduct.category && item.id !== singleProduct.id).slice(0, 5)

    const uniqueCategories = [...new Set(product.map((item) => item.category))]

    const handleNext = () => {
        if (uniqueCategories.length === 0) return

        const currentCategoryIndex = uniqueCategories.findIndex(
            (cat) => cat === singleProduct.category
        )
        if (currentCategoryIndex === -1) return

        const nextCategoryIndex = (currentCategoryIndex + 1) % uniqueCategories.length
        const nextCategory = uniqueCategories[nextCategoryIndex]

        const nextProduct = product.find((item) => item.category === nextCategory)
        if (!nextProduct) return

        setVisitedHistory((prev) => [...prev, singleProduct.id])

        navigate(`/products/${nextProduct.id}`)
    }

    // previous button handler
    const handlePrevious = () => {
        if (visitedHistory.length === 0) return

        const lastVisitedId = visitedHistory[visitedHistory.length - 1]
        setVisitedHistory((prev) => prev.slice(0, -1))

        navigate(`/products/${lastVisitedId}`)
    }

    const hasPrevious = visitedHistory.length > 0

    return (
        <main className="max-w-6xl mx-auto px-6 py-8">
            {isLoading ? (
                <ProductDetailSkeleton />
            ) : (
                <div>
                    <div className="grid lg:grid-cols-2 gap-15">
                        {/* Image */}
                        <div className="bg-white rounded-3xl p-8 h-[480px] flex items-center justify-center hover:p-5 transition-[padding] duration-500 ease-in-out">
                            <img
                                src={singleProduct.image}
                                alt={singleProduct.title}
                                className="w-auto h-auto max-w-full max-h-full object-contain cursor-pointer"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col">
                            <span className="inline-block w-fit bg-accent/10 text-accent border border-accent/30 text-xs font-semibold px-2 py-1 rounded-full mb-4">
                                {singleProduct.category}
                            </span>

                            <h1 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-3 leading-tight">
                                {singleProduct.title}
                            </h1>

                            <div className="flex items-center gap-2 pb-5 border-b border-white mb-5">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={
                                                i < Math.round(singleProduct.rating?.rate)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'fill-text-muted text-text-muted'
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="text-text-secondary text-sm font-semibold">{singleProduct.rating?.rate}</span>
                                <span className="text-text-muted text-sm">({singleProduct.rating?.count} reviews)</span>
                            </div>

                            <p className="text-4xl font-display font-bold text-accent pb-5 border-b border-white mb-5">
                                ${singleProduct.price}
                            </p>

                            <p className="text-text-muted text-sm font-semibold mb-6">{singleProduct.description}</p>

                            {/* Add to Cart / In-Cart states */}
                            {isInCart ? (
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between border border-border rounded-2xl px-5 py-3">
                                        <span className="text-text-secondary text-sm font-semibold">In cart:</span>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => decreseOrRemove(isInCart)}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-primary hover:bg-text-muted/15 transition-colors cursor-pointer"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-bold text-text-primary w-4 text-center">{isInCart.qty}</span>
                                            <button
                                                onClick={() => cartItemQtyIncrement(isInCart.id)}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-primary hover:bg-text-muted/15 transition-colors cursor-pointer"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setIsCartOpen(true)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 font-semibold rounded-2xl py-2.5 cursor-pointer">
                                            <Check size={18} />
                                            Added to Cart
                                        </button>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-border text-text-secondary hover:text-red-400 hover:border-red-400/40 transition-colors shrink-0 cursor-pointer">
                                            <Heart size={20} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setIsCartOpen(true)}
                                        className="w-full text-center text-text-secondary hover:text-text-primary font-medium py-3 transition-colors cursor-pointer">
                                        View Cart →
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-3 mb-6">
                                    <button
                                        onClick={() => {
                                            addToCart(singleProduct.id)
                                            setIsCartOpen(true)
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-text font-display font-bold rounded-2xl py-2.5 h-13 transition-colors cursor-pointer"
                                    >
                                        <ShoppingCart size={18} />
                                        Add to Cart
                                    </button>
                                    <button className="w-13 h-13 flex items-center justify-center rounded-2xl border border-border text-text-secondary hover:text-red-400 hover:border-red-400/40 transition-colors shrink-0">
                                        <Heart size={20} />
                                    </button>
                                </div>
                            )}

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-3 mb-10">
                                <div className="border rounded-2xl p-2.5 text-center">
                                    <Truck size={18} className="text-accent mx-auto mb-2" />
                                    <p className="text-text-secondary text-[11px] font-bold">Free Delivery</p>
                                    <p className="text-text-muted text-[10px] font-semibold mt-0.5">On orders $50+</p>
                                </div>
                                <div className="border rounded-2xl p-2.5 text-center">
                                    <Shield size={18} className="text-accent mx-auto mb-2" />
                                    <p className="text-text-secondary text-[11px] font-bold">Secure Pay</p>
                                    <p className="text-text-muted text-[10px] font-bold mt-0.5">256-bit SSL</p>
                                </div>
                                <div className="border rounded-2xl p-2.5 text-center">
                                    <RotateCcw size={18} className="text-accent mx-auto mb-2" />
                                    <p className="text-text-secondary text-[11px] font-bold">Easy Returns</p>
                                    <p className="text-text-muted text-[10px] font-bold mt-0.5">30-day policy</p>
                                </div>
                            </div>

                            {/* Previous / Next navigation */}
                            {hasPrevious ? (
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={handlePrevious}
                                        className="flex items-center justify-center gap-1.5 bg-text-muted/10 border border-border text-text-primary text-[15px] font-display rounded-2xl py-3 hover:bg-white/10 transition-colors cursor-pointer">
                                        <ChevronLeft size={16} />
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center justify-center gap-1.5 bg-accent hover:bg-accent-light text-accent-text text-[15px] font-display font-semibold rounded-2xl py-3 transition-colors cursor-pointer">
                                        Next
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="w-full flex items-center justify-center gap-1.5 bg-accent hover:bg-accent-light text-accent-text font-bold rounded-2xl py-3 transition-colors cursor-pointer">
                                    Next
                                    <ChevronRight size={18} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
                            Related Products
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                            {relatedProductsData.map((p) => {
                                let havInCart = cartItem.find((item) => item.id === p.id)
                                return <ProductCard key={p.id} product={p} havInCart={havInCart} />
                            })}
                        </div>
                    </div>
                </div>
            )}

        </main>
    )
}

export default ProductDetail