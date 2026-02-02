import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuntProvaider'
import { getProfileUser } from '../api/crudprofile/CrudProfile'

export const Navbar = () => {
    const { logout } = useAuth()
    const [profile, setprofile] = useState(null)

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const data = await getProfileUser()
                setprofile(data)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        fetchDataUser()
    }, [])
    return (
        <div>
            <button onClick={logout}>Cerrar sesión</button>
            <div>
                <h1> bienvedido {profile?.username} </h1>
            </div>
            
        </div>
    )
}
