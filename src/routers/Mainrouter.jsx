import React from 'react'

import { Lading, Login, Register, Dashboard } from '../barrel/BarrelRoutes'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { Route, Routes } from 'react-router'

export const Mainrouter = () => {
    return (
        <>
            <Routes>
                
                <Route path='*' element={
                    
                        <Lading />
                    
                } />
                <Route path='/' element={
                   
                        <Lading />
                    
                } />
                <Route path='/login' element={
                    <PublicRouter>
                        <Login />
                    </PublicRouter>
                } />
                <Route path='/register' element={
                    <PublicRouter>
                        <Register />
                    </PublicRouter>
                } />
                <Route path='/dashboard' element={
                    <PrivateRouter>
                        <Dashboard />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}
