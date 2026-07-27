import { Star, Zap } from 'lucide-react'
import HeroBanner from '../components/home/HeroBanner.jsx'
import QuickStats from '../components/home/QuickStats.jsx'
import CategoryGrid from '../components/home/CategoryGrid.jsx'
import ProductListSection from '../components/home/ProductListSection.jsx'
import TrustBadges from '../components/home/TrustBadges.jsx'
import { useContext } from 'react'
import { MyStore } from '../context/ProductContext.jsx'

const Home = () => {

  const { product, categoryOptions } = useContext(MyStore)

  const topRatedProducts = [...product]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5)

  const newArrivalProducts = [...product]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5)

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
      <HeroBanner />
      <QuickStats topRatedProducts={topRatedProducts} categoryOptions={categoryOptions} />
      <CategoryGrid />

      <div className="grid lg:grid-cols-2 gap-6">
        <ProductListSection
          title="Top Rated"
          icon={Star}
          iconColor="text-yellow-500"
          products={topRatedProducts}
          seeAllLink="/products?sort=Top Rated"
        />
        <ProductListSection
          title="New Arrivals"
          icon={Zap}
          iconColor="text-accent"
          products={newArrivalProducts}
          seeAllLink="/products"
        />
      </div>

      <TrustBadges />
    </main>
  )
}

export default Home