import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import { useNavigate } from 'react-router'
import { Auth } from '../../context/AuthContext'
import { useContext } from 'react'

const HeroBanner = () => {

    const navigate = useNavigate()
    const { loggedInUser } = useContext(Auth)

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "GOOD MORNING";
    } else if (hour < 17) {
        greeting = "GOOD AFTERNOON";
    } else if (hour < 21) {
        greeting = "GOOD EVENING";
    } else {
        greeting = "GOOD NIGHT";
    }

    return (
        <div
            className="relative overflow-hidden rounded-3xl border bg-text-muted/5 p-8 sm:p-12"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1 relative">
                    <div className="absolute top-35 -left-25 w-70 h-70 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none" />

                    <p className="text-accent text-sm tracking-widest mb-3 font-display">
                        {greeting} 👋
                    </p>
                    <div className='flex flex-col gap-0'>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary leading-none">
                            Welcome back,
                        </h1>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-accent leading-none mb-4">
                            {loggedInUser.name?.split(' ')[0]}!
                        </h1>
                    </div>
                    <p className="text-text-secondary text-[16px] mb-8 max-w-xl">
                        Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <Button
                            onClick={() => navigate('/products')}
                            icon={ArrowRight}
                        >Shop Now</Button>
                        <Button
                            onClick={() => navigate('/products')}
                            variant="secondary"
                        >View All Products</Button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 w-full lg:w-64 shrink-0">
                    <div className="bg-accent/10 border border-accent/30 rounded-2xl px-6 py-4 flex flex-col items-center">
                        <p className="text-4xl font-display font-bold text-accent">20+</p>
                        <p className="text-text-secondary text-xs mt-1">Products Available</p>
                    </div>
                    <div className="bg-surface border rounded-2xl px-6 py-4 flex flex-col items-center">
                        <p className="text-2xl font-display font-bold text-text-primary">Free</p>
                        <p className="text-text-secondary text-xs mt-1">Delivery on ₹999+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner