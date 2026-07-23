import { Zap } from 'lucide-react'

const Logo = ({ size = 'md' }) => {
    const sizes = {
        sm: { box: 'w-6 h-6', icon: 12, text: 'text-[16px]' },
        md: { box: 'w-8 h-8', icon: 16, text: 'text-[18px]' },
        lg: { box: 'w-10 h-10', icon: 18, text: 'text-[24px]' },
    }

    const s = sizes[size]

    return (
        <div className="flex items-center gap-3">
            <div className={`${s.box} bg-accent rounded-xl flex items-center justify-center shrink-0`}>
                <Zap size={s.icon} className="text-accent-text fill-accent-text" />
            </div>
            <span className={`${s.text} font-display font-bold text-text-primary`}>
                Sky<span className="text-accent">Mart</span>
            </span>
        </div>
    )
}

export default Logo