import React from 'react'
import "../styles/signin.css"
import {Link} from 'react-router-dom'
function Registrarse() {
  return (
    <main>
          <main className='main-registrarse'>
      <h1 className='registro-h1'>Gracias por escojer Estudia<span>Conford</span></h1>
      <section className='section-btn'>
      <Link to='/auth/signin/usuario'>Soy Usuario</Link>
       <Link to='/auth/signin/admin'>Soy Administrador</Link>
      </section>
      <Link to="/">volver al inicio</Link>
    </main>
    </main>
  )
}

export default Registrarse