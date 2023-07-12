import useEstudiantes from "../hooks/useEstudiantes";
import Habitacion from "../components/Habitacion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const { habitacion, habitaciones, obtenerHabitaciones, setHabitacionSeleccionada, obtenerDatosPersonales, obtenerHabitacionUsuario} = useEstudiantes();

  useEffect(() => {
    obtenerHabitaciones();
    obtenerDatosPersonales()
    obtenerHabitacionUsuario()
    setHabitacionSeleccionada({})
  }, []);

  return (
    <main className="">
      <div>
        {Object.keys(habitacion).length === 0 ? (
          <div className="flex xl:flex-row justify-center px-1 py-10 xl:p-20 gap-10 xl:gap-52 bg-gradient-to-r from-slate-950 to-slate-800">
            <h1 className="text-center font-semibold text-4xl text-white">
              No tienes una habitacion en renta
            </h1>
          </div>
        ) : (
          <div className="flex xl:flex-row  flex-col-reverse p-5 xl:p-20 justify-around gap-10 xl:gap-0 bg-gradient-to-r from-slate-800 to-slate-600">
            <img
              className="w-full xl:w-[450px] animate-entrada object-cover"
              src={`${import.meta.env.VITE_BACKEND_URL}/api/img/${habitacion?.imagen1}`}
              alt="imagen-usuario-habitacion"
            />
            <div className="flex flex-col gap-4 items-center xl:items-end text-white animate-entrada mt-10">
              <h1 className="font-semibold text-6xl xl:text-4xl text-center ">Tu Habitacion</h1>

              <p className="text-2xl xl:text-lg text-center xl:text-end">
                {habitacion.direccion}
              </p>
              <p className="text-2xl ">
                {habitacion.ciudad}, {habitacion.estado} por ti
              </p>
              <Link to="/dashboard/mihabitacion" className=" text-2xl  ">
                Ver Detalles
              </Link>
            </div>
          </div>
        )}
      </div>
      <h1 className="animate-entrada text-4xl text-center my-10 text-sky-900 font-semibold">
        Habitaciones
      </h1>
      <section className={`animate-entrada grid md:grid-cols-2 ${habitaciones.length === 0 ? '' : 'xl:grid-cols-3'} gap-10 md:mx-10 xl:mx-52`}>
        {habitaciones.length === 0
          ? (
              <h1 className="text-2xl text-gray-500 pl-2">No hay habitaciones disponibles</h1>    
        
          )
          : habitaciones.map((room) => (
            <Habitacion
              key={room.id}
              foto={room.imagen1}
              direccion={room.direccion}
              estado={room.estado}
              ciudad={room.ciudad}
              id={room.id}
            />
          ))}
      </section>
    </main>
  );
}

export default Dashboard;
