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
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import ProductCard from '../components/shop/ProductCard.jsx'
import { useParams } from 'react-router'
import axios from 'axios'
import { MyStore } from '../context/ProductContext.jsx'

const dummyRelated = [
    { id: 2, name: 'Smart Watch Series 5', category: 'Electronics', price: 299.99, rating: 4, reviews: 85, image: 'https://picsum.photos/seed/smartwatch/400/400' },
    { id: 3, name: 'Professional Camera Lens', category: 'Electronics', price: 599.99, rating: 5, reviews: 45, image: 'https://picsum.photos/seed/cake/400/400' },
    { id: 4, name: 'Wireless Gaming Mouse', category: 'Electronics', price: 79.99, rating: 5, reviews: 95, image: 'https://picsum.photos/seed/mouse/400/400' },
    { id: 5, name: '4K Ultra HD Monitor', category: 'Electronics', price: 349.99, rating: 5, reviews: 88, image: 'https://picsum.photos/seed/monitor2/400/400' },
    { id: 6, name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, rating: 4, reviews: 142, image: 'https://picsum.photos/seed/keyboard2/400/400' },
]

const ProductDetail = () => {
    const hasPrevious = false // demo ke liye — pehla product hai isliye false

    const [singleProduct, setSingleProduct] = useState({})
    const { cartItem, addToCart, cartItemQtyIncrement, cartItemQtyDecrement, removeCartItem } = useContext(MyStore)

    let { id } = useParams()

    const getSingleProduct = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [id])

    const isInCart = cartItem.find((item) => item.id === singleProduct.id)

    const decreseOrRemove = (isInCart) => {
        if(isInCart.qty <= 1) {
            removeCartItem(isInCart.id)
        } else {
            cartItemQtyDecrement(isInCart.id)
        }
    }

    console.log(singleProduct)

    return (
        <div className="min-h-screen bg-bg">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Image */}
                    <div className="bg-white rounded-3xl p-8 h-fit">
                        <img
                            src={singleProduct.image}
                            alt={singleProduct.title}
                            className="w-full aspect-square object-contain rounded-2xl"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <span className="inline-block w-fit bg-accent/10 text-accent-dark border border-accent/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            {singleProduct.category}
                        </span>

                        <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3 leading-tight">
                            {singleProduct.title}
                        </h1>

                        <div className="flex items-center gap-2 pb-5 border-b border-border mb-5">
                            <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={
                                            i < Math.round(singleProduct.rating?.rate)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'fill-text-muted text-text-muted'
                                        }
                                    />
                                ))}
                            </div>
                            <span className="text-text-primary font-semibold">{singleProduct.rating?.rate}</span>
                            <span className="text-text-muted">({singleProduct.rating?.count} reviews)</span>
                        </div>

                        <p className="text-4xl font-display font-extrabold text-accent pb-5 border-b border-border mb-5">
                            ${singleProduct.price}
                        </p>

                        <p className="text-text-secondary mb-6">{singleProduct.description}</p>

                        {/* Add to Cart / In-Cart states */}
                        {isInCart ? (
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between border border-border rounded-xl px-5 py-3.5">
                                    <span className="text-text-secondary font-medium">In cart:</span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => decreseOrRemove(isInCart)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="font-bold text-text-primary w-4 text-center">{isInCart.qty}</span>
                                        <button
                                            onClick={() => cartItemQtyIncrement(isInCart.id)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 font-semibold rounded-xl py-3.5 cursor-pointer">
                                        <Check size={18} />
                                        Added to Cart
                                    </button>
                                    <button className="w-14 h-14 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-red-400 hover:border-red-400/40 transition-colors shrink-0 cursor-pointer">
                                        <Heart size={20} />
                                    </button>
                                </div>

                                <button className="w-full text-center text-text-secondary hover:text-text-primary font-medium py-3 transition-colors cursor-pointer">
                                    View Cart →
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => addToCart(singleProduct.id)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-text font-bold rounded-xl py-3.5 transition-colors cursor-pointer"
                                >
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                                <button className="w-14 h-14 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-red-400 hover:border-red-400/40 transition-colors shrink-0">
                                    <Heart size={20} />
                                </button>
                            </div>
                        )}

                        {/* Trust badges */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="border border-border rounded-xl p-4 text-center">
                                <Truck size={20} className="text-accent mx-auto mb-2" />
                                <p className="text-text-primary text-sm font-semibold">Free Delivery</p>
                                <p className="text-text-muted text-xs mt-0.5">On orders $50+</p>
                            </div>
                            <div className="border border-border rounded-xl p-4 text-center">
                                <Shield size={20} className="text-accent mx-auto mb-2" />
                                <p className="text-text-primary text-sm font-semibold">Secure Pay</p>
                                <p className="text-text-muted text-xs mt-0.5">256-bit SSL</p>
                            </div>
                            <div className="border border-border rounded-xl p-4 text-center">
                                <RotateCcw size={20} className="text-accent mx-auto mb-2" />
                                <p className="text-text-primary text-sm font-semibold">Easy Returns</p>
                                <p className="text-text-muted text-xs mt-0.5">30-day policy</p>
                            </div>
                        </div>

                        {/* Previous / Next navigation */}
                        {hasPrevious ? (
                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex items-center justify-center gap-1.5 bg-bg-secondary border border-border text-text-primary font-semibold rounded-xl py-3.5 hover:bg-white/5 transition-colors cursor-pointer">
                                    <ChevronLeft size={18} />
                                    Previous
                                </button>
                                <button className="flex items-center justify-center gap-1.5 bg-accent hover:bg-accent-light text-accent-text font-bold rounded-xl py-3.5 transition-colors cursor-pointer">
                                    Next
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        ) : (
                            <button className="w-full flex items-center justify-center gap-1.5 bg-accent hover:bg-accent-light text-accent-text font-bold rounded-xl py-3.5 transition-colors cursor-pointer">
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
                        {dummyRelated.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default ProductDetail