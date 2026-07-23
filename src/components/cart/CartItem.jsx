import { Minus, Plus, Trash2 } from 'lucide-react'

const CartItem = ({ item }) => {
    const total = (item.price * item.qty).toFixed(2)

    return (
        <div className="border rounded-2xl px-4 py-3 flex gap-4">
            <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover bg-bg-secondary shrink-0 border border-border"
            />

            <div className="flex-1 min-w-0">
                <p className="font-semibold text-text-secondary text-sm truncate">{item.name}</p>
                <p className="text-accent font-display font-bold text-lg mt-0.5">${total}</p>
                <p className="text-text-muted text-xs font-semibold">${item.price.toFixed(2)} each</p>

                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg text-text-primary hover:text-accent hover:bg-text-muted/10 hover:font-bold transition-colors border border-border rounded px-1 py-1 cursor-pointer">
                            <Minus size={14} />
                        </button>
                        <span className="text-text-primary font-semibold w-4 text-center text-sm">{item.qty}</span>
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg text-text-primary hover:text-accent hover:bg-text-muted/10 hover:font-bold transition-colors border border-border rounded px-1 py-1 cursor-pointer">
                            <Plus size={14} />
                        </button>
                    </div>

                    <button className="text-red-400 hover:text-red-600 transition-colors cursor-pointer">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem