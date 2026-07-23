import { Star, Zap } from 'lucide-react'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroBanner from '../components/home/HeroBanner.jsx'
import QuickStats from '../components/home/QuickStats.jsx'
import CategoryGrid from '../components/home/CategoryGrid.jsx'
import ProductListSection from '../components/home/ProductListSection.jsx'
import TrustBadges from '../components/home/TrustBadges.jsx'
import { topRatedProducts, newArrivalProducts } from '../data/products.js'

const Home = () => {

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        <HeroBanner />
        <QuickStats />
        <CategoryGrid />

        <div className="grid lg:grid-cols-2 gap-6">
          <ProductListSection
            title="Top Rated"
            icon={Star}
            iconColor="text-yellow-500"
            products={topRatedProducts}
          />
          <ProductListSection
            title="New Arrivals"
            icon={Zap}
            iconColor="text-accent"
            products={newArrivalProducts}
          />
        </div>

        <TrustBadges />
      </main>

      <Footer />
    </div>
  )
}

export default Home