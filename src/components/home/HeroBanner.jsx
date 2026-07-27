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
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border bg-text-muted/5 p-4 sm:p-6 md:p-8 lg:p-12"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
        >
            <div className="flex flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="flex-1 relative min-w-0">
                    <div className="absolute top-20 sm:top-28 md:top-35 -left-14 sm:-left-20 md:-left-25 w-36 h-36 sm:w-52 sm:h-52 md:w-70 md:h-70 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none" />

                    <p className="text-accent text-[10px] sm:text-xs md:text-sm tracking-widest mb-2 sm:mb-3 font-display">
                        {greeting} 👋
                    </p>
                    <div className='flex flex-col gap-0'>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary leading-tight sm:leading-none">
                            Welcome back,
                        </h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent leading-tight sm:leading-none mb-2 sm:mb-3 md:mb-4">
                            {loggedInUser.name?.split(' ')[0]}!
                        </h1>
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-6 md:mb-8 max-w-xl">
                        Discover today's picks — hand-curated products across <br className="hidden md:block" /> electronics, fashion, and more.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
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

                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-24 sm:w-36 md:w-40 lg:w-40 shrink-0">
                    <div className="w-full bg-accent/10 border border-accent/30 rounded-lg sm:rounded-xl md:rounded-2xl px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex flex-col items-center">
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent">20+</p>
                        <p className="text-text-secondary text-[8px] sm:text-[10px] md:text-xs mt-1 text-center">Products Available</p>
                    </div>
                    <div className="w-full bg-surface border rounded-lg sm:rounded-xl md:rounded-2xl px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex flex-col items-center">
                        <p className="text-base sm:text-xl md:text-2xl font-display font-bold text-text-primary">Free</p>
                        <p className="text-text-secondary text-[8px] sm:text-[10px] md:text-xs mt-1 text-center">Delivery on ₹999+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner