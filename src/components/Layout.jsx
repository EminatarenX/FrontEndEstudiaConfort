
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Layout() {
  return (
    <>
      <header className='admin-header'>
        <Link className='h1' to='/'>Estudia<span className='confort'>Confort</span></Link>
        <button className='fold'> </button>
        <div className='header-links'>
          <Link>Inicio</Link>
          <Link>Habitaciones</Link>
          <Link>&#9776;</Link>
        </div>
      </header>
        <Outlet/>

    </>
  )
}

export default Layout