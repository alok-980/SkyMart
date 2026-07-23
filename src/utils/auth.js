const USERS_KEY = 'skymart_users'
const CURRENT_USER_KEY = 'skymart_current_user'

export const getUsers = () => {
    const data = localStorage.getItem(USERS_KEY)
    return data ? JSON.parse(data) : []
}

export const registerUser = ({ name, email, password }) => {
    const users = getUsers()
    const exists = users.some((u) => u.email === email)
    if (exists) {
        return { success: false, message: 'An account with this email already exists.' }
    }
    const newUser = { name, email, password }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))
    return { success: true }
}

export const loginUser = ({ email, password }) => {
    const users = getUsers()
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) {
        return { success: false, message: 'Invalid email or password.' }
    }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(found))
    return { success: true, user: found }
}

export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY)
}

export const getCurrentUser = () => {
    const data = localStorage.getItem(CURRENT_USER_KEY)
    return data ? JSON.parse(data) : null
}