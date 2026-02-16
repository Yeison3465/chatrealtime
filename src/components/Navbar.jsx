import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuntProvaider'
import { getProfileUser } from '../api/crudprofile/CrudProfile'

export const Navbar = () => {
    const { logout } = useAuth()
    const [profile, setprofile] = useState(null)
    const [isactive, setIsactive] = useState(false)

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const data = await getProfileUser()
                setprofile(data)
                console.log('Profile data:', data)
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
            <div>
                <button onClick={() => setIsactive(true)}>Ver perfil </button>
            </div>
            {isactive && (<div>
                <h2>Perfil Detallado</h2>
                <p>Nombre : {profile?.first_name}</p>
                <p>Apellido : {profile?.last_name}</p>
                <p>Nombre de usuario : {profile?.username}</p>
                <p>Correo electrónico : {profile?.email}</p>
                <img src={profile?.qr_code} alt="codigo QR" />
                <img src={profile?.avatar} alt="Avatar" />
                <button onClick={() => setIsactive(false)}>cerrar</button>
            </div>)}

        </div>
    )
}
