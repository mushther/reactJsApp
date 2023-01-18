import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import Wishlist from './Wishlist'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
    )
}

export default AllRoutes