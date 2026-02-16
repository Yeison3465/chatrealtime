import React, { useEffect, useState } from 'react'
import { getConctact } from '../../api/Conctact/CrudConctact'
import { useAuth } from '../../contexts/AuntProvaider'

export const ShowContacts = () => {
    const { user } = useAuth()
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        if (!user) return

        const fetchContacts = async () => {
            const data = await getConctact(user.id)
            setContacts(data)
        }

        fetchContacts()
    }, [user])

    return (
        <div>
            <h2>Contactos</h2>

            {contacts.length > 0 ? (
                <>
                    <h1>Hay {contacts.length} contactos</h1>

                    {contacts.map(c => (
                        <div key={c.id}>
                            <p>@{c.contact.username}</p>
                            <p>{c.contact.first_name} {c.contact.last_name}</p>
                        </div>
                    ))}
                </>
            ) : (
                <p>No hay contactos disponibles</p>
            )}
        </div>
    )
}
