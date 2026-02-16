import { a } from 'framer-motion/client'
import React, { useState } from 'react'
import { AuthenticateLogin } from '../api/Auntservice/login'
import { useAuth } from '../contexts/AuntProvaider'

export const Login = () => {

  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label> Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
