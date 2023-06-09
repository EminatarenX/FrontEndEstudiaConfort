import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Modal() {
  const navigate = useNavigate()
  const cerrarSesion = (e) => {
    
    e.preventDefault();

    localStorage.removeItem("token");
    setTimeout(() => {

      navigate("/auth/login");
    }, 1500);
  };

  return (
    <nav className='modal-usuario'>
      <Link to='/dashboard' className='modal-links'>Habitaciones</Link>
      <Link to='/dashboard/habitacion' className='modal-links'>Perfil</Link>
      <button className='modal-links' onClick={cerrarSesion}>Cerrar sesion</button>
    </nav>
  )
}

export default Modal