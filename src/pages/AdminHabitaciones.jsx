import { useState } from "react";
import ImagenesHabitaciones from "../components/ImagenesHabitaciones";
export default function AdminHabitaciones() {
  const [previewImage, setPreviewImage] = useState("");
  const [previewBanio, setPreviewBanio] = useState("");

  function imagenBanio(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBanio(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewBanio("");
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage("");
    }
  };

  return (
    <main className="p-2 flex flex-col gap-5">
      <h1 className="xl:text-center text-4xl mt-5">Habitaciones</h1>
      <p className="xl:text-center text-slate-600 text-2xl ">
        Agrega, modifica y elimina las habitaciones que los usuarios podran{" "}
        ver en su inicio
      </p>
      <article className="h-400 bg-slate-200 ">
        <form className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col">
            <label>Descripcion</label>
            <input
              type="text"
              placeholder="Nombre de la habitacion"
              className="rounded"
            />
            <label>Direccion</label>
            <input
              type="text"
              placeholder="Direccion de la habitacion"
              className="rounded"
            />
            <label>Precio</label>
            <input
              type="number"
              placeholder="Precio de la habitacion"
              className="rounded"
            />
            <label>Estado</label>
            <select name="" id="">
              <option value="">-- Selecione una opcion --</option>
              <option value="ocupado">Ocupado</option>
              <option value="ocupado">Desocupado</option>
            </select>
          </div>
          <ImagenesHabitaciones
            previewBanio={previewBanio}
            previewImage={previewImage}
            handleImageChange={handleImageChange}
            imagenBanio={imagenBanio}
          />
        </form>
      </article>
    </main>
  );
}
