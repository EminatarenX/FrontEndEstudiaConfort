import {useState} from 'react'
import { Navigate } from 'react-router-dom'

import AdminLayout from './Layout'
export default function PrivateAdmin() {
  const [auth, cargando] = useState({
    id: '1'
  })

  if(cargando) return "cargando"

  return <>{auth.id ? <AdminLayout/> : <Navigate to='/login'/>}</>
}
