import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, Error404, UserPage, UserCreate } from './pages/exports'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <Toaster closeButton richColors />
    <Routes>
      <Route path="/" element={<Navigate to="/api/users" />} />
      <Route path="/api/users" element={<HomePage />} />
      <Route path="/api/user/create" element={<UserCreate />} />
      <Route path="/api/user/:id/edit" element={<UserCreate />} />
      <Route path="/api/user/:id" element={<UserPage />} />
      <Route path="*" element={<Error404 />}/>
    </Routes>
    </>
  )
}

export default App
