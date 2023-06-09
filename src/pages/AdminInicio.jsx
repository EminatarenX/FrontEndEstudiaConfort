import useEstudiantes from "../hooks/useEstudiantes";
import TablaEstudiantes from "../components/TablaEstudiantes";
import "../styles/adminIndex.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminInicio() {
  const { estudiantes, obtenerEstudiantes } = useEstudiantes();
  const {id} = useParams()

  useEffect(()=>{
    obtenerEstudiantes(id)
  },[]) 

  const handleSubmit = e => {
    e.preventDefault()
    alert('filtrando')
    
  }
  
  return (
    <section className="panel-admin">
      <h1 className="panel-titulo">Panel de administracion</h1>
      <div className="contenedor-filtro">
        <form onSubmit={handleSubmit} >
          <label className="filtros-title">Filtros</label>

          <label className="sublabels" htmlFor="edificio">Edificio</label>
          <select name="edificio" id="edificio">
            <option value="">-- Selecciona una opcion</option>
            <option value="E1">E1</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
          </select>
          <label className="sublabels" htmlFor="estado">Estado de pago</label>
          <select name="estado" id="estado">
          <option value="">-- Selecciona una opcion</option>
            <option value="pendiente">PENDIENTE</option>
            <option value="pagado">PAGADO</option>
          </select>
          
          <input className="submit-btn" type="submit" value='FILTRAR' />
        </form>
      
      <div className="tabla-scroll">
        <div>
          <table>
            <thead>
              <tr>
                <th className="on-mobile">Id</th>
                <th>Nombre</th>
                <th>Nombre tutor</th>
                <th>Tel. Tutor</th>
                <th className="on-mobile">Telefono</th>
                <th className="on-mobile">Institucion Educativa</th>
                <th>Edificio</th>
                <th className="on-mobile">Habitacion</th>
                <th>Renta</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <TablaEstudiantes
                  id={estudiante.id}
                  nombre={estudiante.nombre}
                  nombre_tutor={estudiante.nombre_tutor}
                  institucion={estudiante.institucion}
                  telefono={estudiante.telefono}
                  tel_tutor={estudiante.tel_tutor}
                  edificio={estudiante.edificio}
                  habitacion={estudiante.habitacion}
                  renta={estudiante.renta}
                  key={estudiante.id}
                />
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </section>
  );
}

export default AdminInicio;
