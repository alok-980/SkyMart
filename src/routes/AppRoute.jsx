import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Navigate, Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import ProductDetail from '../pages/ProductDetail'

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path='/products'
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />

        <Route
          path='/about'
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoute