import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyStore = createContext()

const CART_STORAGE_KEY = 'skymart_cart'

const getCartItems = () => {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItem, setCartItem] = useState(getCartItems || [])
    const [categoryOptions, setCategoryOptions] = useState(['All Categories'])
    const [sortOptions, setSortOptiond] = useState([
        'Featured',
        'Price: Low → High',
        'Price: High → Low',
        'Top Rated',
        'Lowest Rated',
    ])

    const fetchProductData = async () => {
        try {
            let res = await axios.get('https://fakestoreapi.com/products')
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    useEffect(() => {
        if (product.length) {
            setCategoryOptions([
                "All Categories",
                ...new Set(product.map(item => item.category))
            ]);
        }
    }, [product]);

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItem))
    }, [cartItem])

    const addToCart = (id) => {
        let res = product.find((val) => val.id === id)
        setCartItem((prev) => [...prev, { ...res, qty: 1 }])
        toast.success('🛒Item added to Cart!')
    }

    const removeCartItem = (id) => {
        let res = cartItem.filter((val) => val.id !== id)
        setCartItem(res)
        toast.info('🛒Item removed from Cart!')
    }

    const cartItemQtyIncrement = (id) => {
        setCartItem((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, qty: val.qty + 1 } : val
            })
        })
    }

    const cartItemQtyDecrement = (id) => {
        setCartItem((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, qty: val.qty - 1 } : val
            })
        })
    }

    const clearCart = () => {
        setCartItem([])
        toast.info('🛒Cart cleared!')
    }

    const cartTotalValue = cartItem.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return <MyStore.Provider value={{
        product,
        setProduct,
        categoryOptions,
        sortOptions,
        cartItem,
        setCartItem,
        addToCart,
        removeCartItem,
        cartItemQtyIncrement,
        cartItemQtyDecrement,
        cartTotalValue,
        clearCart,
        isCartOpen,
        setIsCartOpen
    }}>{children}</MyStore.Provider>
}