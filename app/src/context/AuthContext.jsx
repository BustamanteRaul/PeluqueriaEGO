import { createContext, useContext, useState, useCallback } from 'react'
import api from '../services/api.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  const login = useCallback(async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('accessToken', data.data.accessToken)
    localStorage.setItem('refreshToken', data.data.refreshToken)
    localStorage.setItem('user', JSON.stringify(data.data.user))
    setUser(data.data.user)
    return data.data
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
