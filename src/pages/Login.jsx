import { Mail, Lock, ArrowRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import Input from '../components/common/Input.jsx'
import Button from '../components/common/Button.jsx'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { Auth } from '../context/AuthContext.jsx'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: { email: '', password: '' }
    })

    const navigate = useNavigate()
    const { registerUsers, setLoggedInUser } = useContext(Auth)

    const handleLogin = (data) => {
        const user = registerUsers.find((user) => user.email === data.email && user.password === data.password)

        if (!user) {
            toast.error('Invalid creds or user not found')
            return
        }

        setLoggedInUser(user)
        localStorage.setItem('loggedUser', JSON.stringify(user))
        toast.success(`Welcome Back! ${user.name}`)

        navigate('/home')
    }

    return (
        <div className="w-full max-w-md bg-surface border border-border rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-1">Sign in</h2>
            <p className="text-text-secondary mb-8 font-display">Enter your credentials to continue</p>

            <form
                onSubmit={handleSubmit(handleLogin)}
                className="space-y-4 font-display"
                noValidate
            >
                <Input
                    type="email"
                    icon={Mail}
                    placeholder="Email address"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address'
                        }
                    })}
                    error={errors.email?.message}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm font-medium">{errors.email.message}</p>
                )}

                <Input
                    isPassword
                    icon={Lock}
                    placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                        }
                    })}
                    error={errors.password?.message}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm font-medium">{errors.password.message}</p>
                )}

                <Button type="submit" className="w-full mt-2" icon={ArrowRight} disabled={isSubmitting}>
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                </Button>
            </form>

            <p className="text-center text-text-secondary mt-6 font-display">
                Don't have an account?{' '}
                <NavLink to="/register" className="text-accent font-semibold hover:underline">
                    Create one
                </NavLink>
            </p>
        </div>
    )
}

export default Login