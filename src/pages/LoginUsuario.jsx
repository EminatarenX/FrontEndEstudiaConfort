import { useState } from "react";
import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


function LoginUsuario() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const { setAuth} = useAuth();


  const iniciarSesion = async (e) => {
    e.preventDefault();

    if ([correo, password].includes("")) {
        setError({
          msj: "Faltan campos por llenar",
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
      if(error.message == 'Network Error'){
        setError({
          msj: "Hubo un fallo en la conexión",
          error: true,
        })
      }
      setError({
        msj: error.response.data.mensaje,
        error: true,
      });
    }
  };



  return (
    <main className="flex justify-center items-center bg-degradado h-full fixed w-full ">
      <form className="flex flex-col gap-2 animate-slide transition-all xl:scale-100 mb-52 p-14 scale-[1.1] animate-sombra " 
      onSubmit={iniciarSesion}>
        <label className="text-4xl font-semibold text-white mb-4" htmlFor="email">
          Iniciar Sesión
        </label>
        {error.error && <Alerta error={error.msj} />}
        <label className="text-white text-sm capitalize" htmlFor="email">
          correo electrónico
        </label>
        <input
          className="border border-gray-300 p-[8px] text-sm rounded-md transition-all w-[300px] focus:outline-blue-500 active:scale-105"
          type="email"
          name="email"
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="usuario@correo.com "
        />
        <label className="text-white text-sm capitalize" htmlFor="password">
          contraseña
        </label>
        <input
          className="border border-gray-300 p-[8px] text-sm rounded-md transition-all w-[300px] focus:outline-blue-500 active:scale-105"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        />
        <input className="border-none h-12 bg-sky-600 text-white rounded-md mt-4 font-bold cursor-pointer hover:bg-sky-500 hover:scale-105 transition-all" type="submit" value="Iniciar sesión" />
      </form>
    </main>
  );
}

export default LoginUsuario;
