import useEstudiantes from "../hooks/useEstudiantes";
import Habitacion from "../components/Habitacion";
import { Link } from "react-router-dom";
import { getBedrooms } from "../constants/bedrooms";

function Dashboard() {
  const { habitacion } = useEstudiantes();

  const bedrooms = getBedrooms();

  return (
    <main className="">
      <div>
        {Object.keys(habitacion).length === 0 ? (
          <div className="flex xl:flex-row justify-center px-1 py-10 xl:p-20 gap-10 xl:gap-52 bg-gradient-to-r from-slate-800 to-slate-600">
            <h1 className="text-center font-semibold text-4xl text-white">
              No tienes una habitacion en renta
            </h1>
          </div>
        ) : (
          <div className="flex xl:flex-row  flex-col-reverse p-20 gap-10 xl:gap-52 bg-gradient-to-r from-slate-800 to-slate-600">
            <img
              className="h-[300px] animate-entrada object-cover"
              src={bedrooms[0].foto_general}
              alt=""
            />
            <div className="flex flex-col gap-10 items-center xl:items-end text-white animate-entrada">
              <h1 className="font-semibold text-4xl">Tu Habitacion</h1>

              <p className="text-2xl text-center xl:text-end">
                {habitacion.descripcion}{" "}
              </p>
              <Link to="/dashboard/habitacion" className=" text-2xl ">
                Ver Detalles
              </Link>
            </div>
          </div>
        )}
      </div>
      <h1 className="animate-entrada text-4xl text-center my-10 text-sky-900 font-semibold">
        Habitaciones
      </h1>
      <section className="animate-entrada grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:mx-10 xl:mx-52 ">
        {bedrooms.length === 0
          ? "No hay habitaciones disponibles"
          : bedrooms.map((room) => (
              <Habitacion
                key={room.id}
                foto_banio={room.foto_banio}
                numero={room.numero}
              />
            ))}
      </section>
    </main>
  );
}

export default Dashboard;
