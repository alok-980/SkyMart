import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router'
import Button from '../common/Button.jsx'

const CTASection = () => {
    return (
        <div className="rounded-3xl py-10 px-6 text-center mb-20 shadow-[0_0_0_0.3px_var(--color-accent)]">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-3">Ready to shop?</h2>
            <p className="text-text-muted font-semibold text-sm mb-8">
                Explore thousands of products at unbeatable prices.
            </p>
            <NavLink to="/products">
                <Button className='font-display font-bold text-lg' icon={ArrowRight}>Browse Products</Button>
            </NavLink>
        </div>
    )
}

export default CTASection