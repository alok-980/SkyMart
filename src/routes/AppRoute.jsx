import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import ProductDetail from '../pages/ProductDetail'
import ProtectBackAfterLogin from './ProtectBackAfterLogin'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route element={<ProtectBackAfterLogin />}>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute