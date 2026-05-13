import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/admin/Login.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  )
}
