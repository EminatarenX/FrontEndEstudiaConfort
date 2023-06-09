import { useState } from "react";
import { useNavigate,Outlet,Link } from "react-router-dom";
import Modal from "./Modal";
import '../styles/sidebar.css'
import useAuth from "../hooks/useAuth";

function UserLayout() {
  const [modal, setModal] = useState(false)
  const {setAuth} = useAuth()

  const navigate = useNavigate();

  const cerrarSesion = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setAuth({})
    
    navigate("/login");

  };
  return (
    <>
    {modal && <Modal/>}
      <aside className="sidebar appear">
        <h1>Bienvenido</h1>
        <nav className="navbar desktop">
          <Link to='/dashboard'>Habitaciones</Link>
          <Link to='/dashboard/perfil'>Perfil</Link>
        </nav>
        <span onClick={()=>setModal(!modal)} className="boton">&#9776;</span>
        <Link onClick={cerrarSesion} className="cerrar-sesion  desktop">
          Cerrar sesion
        </Link>
      </aside>
      <Outlet />
    </>
  );
}

export default UserLayout;
