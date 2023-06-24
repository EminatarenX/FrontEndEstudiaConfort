import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import AdminLayout from './Layout'

export default function PrivateAdmin() {

  const { auth, cargando } = useAuth();

  if (cargando) return "cargando";

  return <>{auth.role === 'admin' ? <AdminLayout/> : <Navigate to='/login'/>}</>
}
