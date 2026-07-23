import { User, Mail, Lock, ArrowRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import Logo from '../components/common/Logo.jsx'
import Input from '../components/common/Input.jsx'
import Button from '../components/common/Button.jsx'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        const res = register({ name, email, password })
        if (!res.success) {
            setError(res.message)
            return
        }

        navigate('/login')
    }

    return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 py-12">
            <div className="mb-8">
                <Logo size='lg' />
            </div>

            <div className="w-full max-w-md bg-surface border border-border rounded-3xl p-8 sm:p-10">
                <h2 className="text-2xl font-display font-bold text-text-primary mb-1">Create account</h2>
                <p className="text-text-muted text-[15px] font-semibold mb-8">Join SkyMart and start shopping</p>

                <form
                    onClick={handleSubmit}
                    className="space-y-4"
                    noValidate
                >
                    <Input
                        type="text"
                        icon={User}
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <Input
                        type="email"
                        icon={Mail}
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Input
                        isPassword
                        icon={Lock}
                        placeholder="Password (min 6 chars)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Input
                        isPassword
                        icon={Lock}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                    <Button type="submit" className="w-full mt-2" icon={ArrowRight}>
                        <p className='font-bold font-display'>Create Account</p>
                    </Button>
                </form>

                <p className="text-center text-text-muted text-[15px] mt-6 font-display font-semibold">
                    Already have an account?{' '}
                    <NavLink to="/login" className="text-accent font-semibold hover:underline">
                        Sign in
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Register