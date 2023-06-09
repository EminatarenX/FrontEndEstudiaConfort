import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/home.css'

function HomeLayout() {
  return (
    <>
    <header className='home-layout'>
      <Link className='estudia-confort'>Estudia<span>Confort</span></Link>
      <div className='links'>
        <Link to='/login'>Iniciar Sesion</Link>
        <Link to='/registrar'>Registrarse</Link>
      </div>
    </header>
    <Outlet/>
    </>
  )
}

export default HomeLayout