import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuntProvaider'
import { acceptFriendRequest, getFriendRequests, rejectFriendRequest } from '../../api/Conctact/CrudConctact'

export const ShowRequest = () => {

    const { user } = useAuth()

    const [isActive, setIsActive] = useState(false)
    const [requests, setRequests] = useState([])

    useEffect(() => {
        if (!user) return

        const fetchRequests = async () => {
            const data = await getFriendRequests(user.id)
            setRequests(data)
        }

        fetchRequests()
    }, [user])

    return (
        <div>
            <button onClick={() => setIsActive(true)}>
                Mostrar Solicitudes
            </button>

            {isActive && (
                requests.length > 0 ? (
                    <>
                        <h1>Hay {requests.length} solicitudes de amistad</h1>

                        {requests.map(req => (
                            <div key={req.id}>
                                <p>
                                    Solicitud de: @{req.sender.username}
                                </p>

                                <button
                                    onClick={async () => {
                                        const ok = await acceptFriendRequest(req)
                                        if (ok) {
                                            setRequests(prev =>
                                                prev.filter(r => r.id !== req.id)
                                            )
                                        }
                                    }}
                                >
                                    Aceptar
                                </button>

                                <button
                                    onClick={async () => {
                                        const ok = await rejectFriendRequest(req.id)
                                        if (ok) {
                                            setRequests(prev =>
                                                prev.filter(r => r.id !== req.id)
                                            )
                                        }
                                    }}
                                >
                                    Rechazar
                                </button>
                            </div>
                        ))}
                        <button onClick={() => setIsActive(false)}>Cerrar</button>
                    </>
                ) : (
                    <>
                        <p>No hay solicitudes de amistad disponibles</p>
                        <button onClick={() => setIsActive(false)}>Cerrar</button>
                    </>
                )
            )}
        </div>
    )
}