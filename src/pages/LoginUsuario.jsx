import { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";
import useAuth from "../hooks/useAuth";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../styles/login.css'

function LoginUsuario() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { setAuth, auth } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correo, password].includes("")) {
      setError({
        msj: "FALTAN CAMPOS POR LLENAR",
        error: true,
      });
      return;
    }

    try {
      const { data } = await ClienteAxios.post("/auth/usuario/login", {
        correo,
        password,
      });
      setError({});

      localStorage.setItem("token", data.jwt);
      setAuth(data);
      Swal.fire({
        title: `Bienvenido ${data.nombre.split(' ')[0]}`,
        icon: 'success'
      })
      setTimeout(() => {
        window.location.reload(false)
      }, 2000);
      
    } catch (error) {
      setError({
        msj: error.response.data.mensaje,
        error: true,
      });
    }
  };



  return (
    <main className="contenedor-login animation-bounce">
      <form className="formulario-login" onSubmit={handleSubmit}>
        <label className="login-text" htmlFor="email">
          Iniciar Sesion
        </label>
        {error.error && <Alerta error={error.msj} />}
        <label className="label-input" htmlFor="email">
          correo electronico
        </label>
        <input
          className="input-login"
          type="text"
          name="email"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label className="label-input" htmlFor="password">
          contraseña
        </label>
        <input
          className="input-login"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="submit" type="submit" value="Iniciar sesion" />
      </form>
    </main>
  );
}

export default LoginUsuario;
