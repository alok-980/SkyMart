import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import SearchFilterBar from '../components/shop/SearchFilterBar.jsx'
import ProductCard from '../components/shop/ProductCard.jsx'
import { MyStore } from '../context/ProductContext.jsx'

const Shop = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [sort, setSort] = useState('Featured')

  const { product, cartItem } = useContext(MyStore)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    const sortFromUrl = searchParams.get('sort')

    if (categoryFromUrl) {
      setCategory(categoryFromUrl)
    }

    if (sortFromUrl) {
      setSort(sortFromUrl)
    }
  }, [searchParams])

  let filteredProducts = product.filter((val) => {
    const matchesSearch = val.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All Categories' || val.category === category
    return matchesSearch && matchesCategory
  })

  if (sort === 'Price: Low → High') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sort === 'Price: High → Low') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sort === 'Top Rated') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating.rate - a.rating.rate)
  } else if (sort === 'Lowest Rated') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.rating.rate - b.rating.rate)
  }

  useEffect(() => {
    if (search) {
      const serchedProduct = product.find((val) => val.name === search)
      setProduct(serchedProduct)
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-text-primary">All Products</h1>
          <p className="text-text-muted mt-1">{filteredProducts.length} products found</p>
        </div>

        <SearchFilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredProducts.map((val) => {
            let havInCart = cartItem.find((item) => item.id === val.id)
            return <ProductCard key={val.id} product={val} havInCart={havInCart} />
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Shop