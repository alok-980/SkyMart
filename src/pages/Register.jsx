import { User, Mail, Lock, ArrowRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import Input from '../components/common/Input.jsx'
import Button from '../components/common/Button.jsx'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { Auth } from '../context/AuthContext.jsx'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        defaultValues: { name: '', email: '', password: '', confirmPassword: '' }
    })

    const navigate = useNavigate()
    const { registerUsers, setRegisterUsers } = useContext(Auth)

    const password = watch('password')

    const handleRegister = (data) => {
        const user = registerUsers.find((user) => user.email === data.email)

        if (user) {
            toast.error('An user with this email allready exist!')
            reset()
            return
        }

        let res = [...registerUsers, data]
        setRegisterUsers(res)
        localStorage.setItem('skyMartUsers', JSON.stringify(res))
        toast.success('Your registration is successfull!')

        reset()
        navigate('/login')
    }

    return (
        <div className="w-full max-w-md bg-surface border border-border rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-1">Create account</h2>
            <p className="text-text-muted text-[15px] font-semibold mb-8">Join SkyMart and start shopping</p>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className="space-y-4"
                noValidate
            >
                <Input
                    type="text"
                    icon={User}
                    placeholder="Full name"
                    {...register('name', {
                        required: 'Full name is required',
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters'
                        }
                    })}
                    error={errors.name?.message}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm font-medium">{errors.name.message}</p>
                )}

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
                    placeholder="Password (min 6 chars)"
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

                <Input
                    isPassword
                    icon={Lock}
                    placeholder="Confirm password"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                            value === password || 'Passwords do not match'
                    })}
                    error={errors.confirmPassword?.message}
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm font-medium">{errors.confirmPassword.message}</p>
                )}

                <Button type="submit" className="w-full mt-2" icon={ArrowRight} disabled={isSubmitting}>
                    <p className='font-bold font-display'>{isSubmitting ? 'Creating account...' : 'Create Account'}</p>
                </Button>
            </form>

            <p className="text-center text-text-muted text-[15px] mt-6 font-display font-semibold">
                Already have an account?{' '}
                <NavLink to="/login" className="text-accent font-semibold hover:underline">
                    Sign in
                </NavLink>
            </p>
        </div>
    )
}

export default Register