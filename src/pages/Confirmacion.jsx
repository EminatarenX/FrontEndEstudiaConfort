import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ClienteAxios from "../config/ClienteAxios";



function Confirmacion() {

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        await ClienteAxios(`/auth/usuario/confirmar/${id}`);
      } catch (error) {
        console.log(error)
        setAlerta({
          msg: error.response.data.mensaje,
          error: true,
        });
    
      }

      
    };
    confirmarCuenta()
  }, []);


  return (
    <div className="flex items-center flex-col p-20 gap-10 bg-degradado fixed h-full w-full">
     <h1 className="text-4xl text-white text-bold">Tu Correo ha sido confirmado</h1>
      

      <Link className="flex justify-center items-center bg-sky-500 rounded-md text-white h-10 font-semibold uppercase px-6" to="/login">Iniciar sesion</Link>

    </div>
  );
}

export default Confirmacion;
