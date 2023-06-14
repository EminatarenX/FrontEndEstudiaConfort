import { useState } from "react";
import { useNavigate,Outlet,Link } from "react-router-dom";
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
      <aside className="bg-gradient-to-r from-sky-950 to-sky-900 w-[300px] h-full fixed flex flex-col px-4 py-8 animate-slide">
        <h1 className="text-4xl text-white">Bienvenido</h1>
        <nav className="flex flex-col gap-10 mt-10">
          <Link className="links" to='/dashboard'>Habitaciones</Link>
          <Link className="links" to='/dashboard/perfil'>Perfil</Link>
        </nav>
      
        <Link onClick={cerrarSesion} className="cerrar-sesion  desktop">
          Cerrar sesion
        </Link>
      </aside>
      <Outlet />
    </>
  );
}

export default UserLayout;
