const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/alok-980',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://x.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t bg-bg py-10 text-center">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative">
                <p className="text-accent text-xl font-display mb-4">SkyMart</p>

                <div className="flex items-center justify-center gap-3 mb-5">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="group relative w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-secondary transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:text-accent-text hover:bg-accent hover:shadow-[0_8px_20px_-6px] hover:shadow-accent/50"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>

                <p className="text-text-muted text-xs">
                    © 2026 SkyMart • Built with React + Tailwind CSS
                </p>
            </div>
        </footer>
    )
}

export default Footer