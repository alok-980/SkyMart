import { Mail, Lock, ArrowRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import AuthLayout from '../components/layout/AuthLayout.jsx'
import Input from '../components/common/Input.jsx'
import Button from '../components/common/Button.jsx'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const res = login({ email, password })
        if (!res.success) {
            setError(res.message)
            return
        }

        navigate('/home')
    }

    return (
        <AuthLayout>
            <div className="w-full max-w-md bg-surface border border-border rounded-3xl p-8 sm:p-10">
                <h2 className="text-2xl font-display font-bold text-text-primary mb-1">Sign in</h2>
                <p className="text-text-secondary mb-8 font-display">Enter your credentials to continue</p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 font-display"
                    noValidate
                >
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                    <Button type="submit" className="w-full mt-2" icon={ArrowRight}>
                        Sign in
                    </Button>
                </form>

                <p className="text-center text-text-secondary mt-6 font-display">
                    Don't have an account?{' '}
                    <NavLink to="/register" className="text-accent font-semibold hover:underline">
                        Create one
                    </NavLink>
                </p>
            </div>
        </AuthLayout>
    )
}

export default Login