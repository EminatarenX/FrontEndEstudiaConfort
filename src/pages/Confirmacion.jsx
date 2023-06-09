import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/confirmar.css";

function Confirmacion() {
  const [alerta, setAlerta] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuentaAdmin = async () => {
      try {
        const urladmin = `${import.meta.env.VITE_CONFIRMAR_ADMIN}/${id}`;

        await axios.get(urladmin);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
    
      }

      
    };
    confirmarCuentaAdmin()
  }, []);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${import.meta.env.VITE_CONFIRMAR_USUARIO}/${id}`;

        await axios.get(url);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
     
      }
    };
    confirmarCuenta();
  }, []);

  return (
    <div className="confirmacion">
      <h1>Tu Correo ha sido confirmado</h1>

      <Link to="/auth/login/usuario">Iniciar sesion como usuario</Link>
      <Link to="/auth/login/admin">Iniciar sesion como Administrador</Link>
    </div>
  );
}

export default Confirmacion;
