import React, { useState } from 'react'
import { AuthenticateRegister } from '../api/Auntservice/register'

export const Register = () => {

    const [firtname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AuthenticateRegister(
                email,
                password,
                firtname,
                lastname,
                username,
                phone,
                avatarUrl
            );
        } catch (error) {
            console.error("Error during registration:", error);
        }

    }

    return (
        <div>
            Register Page
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">nombre</label>
                <input type="text" value={firtname} onChange={(e) => setFirstname(e.target.value)} />
                <label htmlFor="">apellido</label>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <label htmlFor="">nombre de usuario</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="">telefono</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="">avatarUrl</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setAvatarUrl(e.target.files[0])}
                />
                <label htmlFor="">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}
