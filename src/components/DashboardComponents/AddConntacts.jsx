import React, { useState } from 'react'
import { sendFriendRequestByUsername } from '../../api/Conctact/CrudConctact'

export const AddConntacts = () => {
    const [username, setUsername] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await sendFriendRequestByUsername(username)
            console.log("Contact added:", response)
        } catch (error) {
            console.error("Error adding contact:", error)
        }
    }
    return (
        <div>
            <h2>Agregar Contactos</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Agregar Contacto</button>
            </form>
        </div>
    )
}
