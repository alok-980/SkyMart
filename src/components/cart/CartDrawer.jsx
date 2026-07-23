import { ShoppingBag, Package, X, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router'
import Button from '../common/Button.jsx'
import CartItem from './CartItem.jsx'

const CartDrawer = ({ isOpen, onClose, items = [] }) => {
    const isEmpty = items.length === 0
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-surface border-l border-border z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <div className="flex items-center gap-2">
                        <ShoppingBag size={20} className="text-accent" />
                        <h2 className="text-lg font-bold text-text-primary">Cart</h2>
                        {!isEmpty && (
                            <span className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                                {items.length} items
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Body */}
                {isEmpty ? (
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                        <div className="w-16 h-16 bg-bg-secondary rounded-2xl flex items-center justify-center mb-5">
                            <Package size={26} className="text-text-muted" />
                        </div>
                        <p className="text-text-primary font-bold text-lg">Cart is empty</p>
                        <p className="text-text-secondary mt-1 mb-6">Go shop something cool!</p>
                        <NavLink to="/products" onClick={onClose}>
                            <Button icon={ArrowRight}>Browse Products</Button>
                        </NavLink>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-2">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-border px-6 py-5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-text-secondary text-sm font-medium">Total</span>
                                <span className="text-2xl font-display font-bold text-text-primary">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            <Button icon={ArrowRight} className="w-full">
                                <p className='font-display font-bold'>Checkout</p>
                            </Button>

                            <button className="w-full text-center text-text-muted text-xs mt-4 hover:text-red-400 transition-colors cursor-pointer">
                                Clear cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CartDrawer