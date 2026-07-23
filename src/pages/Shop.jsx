import { useState } from 'react'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import SearchFilterBar from '../components/shop/SearchFilterBar.jsx'
import ProductCard from '../components/shop/ProductCard.jsx'
import { allProducts, categoryOptions, sortOptions } from '../data/allProducts.js'

const Shop = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [sort, setSort] = useState('Featured')

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-text-primary">All Products</h1>
          <p className="text-text-muted mt-1">{allProducts.length} products found</p>
        </div>

        <SearchFilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categoryOptions={categoryOptions}
          sort={sort}
          setSort={setSort}
          sortOptions={sortOptions}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Shop