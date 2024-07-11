import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, Error404, UserPage } from './pages/exports'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <Toaster closeButton richColors />
    <Routes>
      <Route path="/" element={<Navigate to="/api/users" />} />
      <Route path="/api/users" element={<HomePage />} />
      <Route path="/api/users/:id" element={<UserPage />} />
      <Route path="*" element={<Error404 />}/>
    </Routes>
    </>
  )
}

export default App
