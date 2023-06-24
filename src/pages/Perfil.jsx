
import useAuth from "../hooks/useAuth";
import {  useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Perfil() {

  const {auth} = useAuth()

  const [nombre, setNombre] = useState(auth.nombre)
  const [telefono, setTelefono] = useState('')
  const [nombre_tutor, setNombreTutor] = useState('')
  const [tel_tutor, setTelTutor] = useState('')
  const [institucion, setInstitucion] = useState('')

  const actualizarDatos = (e) => {
    e.preventDefault()

    if([nombre, telefono, nombre_tutor,tel_tutor,institucion].includes('')){
      Swal.fire({
        title: 'Faltan campos por llenar',
        icon: 'error'
      })
    }


    const datosActualizados = {
      nombre,
      telefono,
      nombre_tutor,
      tel_tutor,
      institucion
    }

    
  }


  useEffect(()=>{
    const completarDatosPersonales = () => {
      if([telefono,nombre_tutor,tel_tutor,institucion].includes('')){
        Swal.fire({
          title: "Actualiza tu informacion personal!",
          icon: "info",
          showConfirmButton: false,
          color: "#0e0a27",
          iconColor: "#ffa528",
          timer: '2000',
          timerProgressBar:true,
          
        })
      }
    }
    completarDatosPersonales()
  },[])



  return (
    <main className="lg:fixed h-full w-full bg-gradient-to-r from-slate-800 to-slate-600">
      <div className="flex flex-col items-center gap-2">
      <img className=" h-40 w-40 rounded-full" src="https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg" alt="" />
      <h1 className="text-4xl  text-white">Perfil</h1>
      </div>

      <form 
      onSubmit={actualizarDatos}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-r from-slate-800 to-slate-600 py-10 px-20">
      <div className="flex flex-col lg:col-span-2">
          <label className="text-white font-semibold" htmlFor="nombre_tutor">Nombre Completo</label>
          <input
            type="text"
            defaultValue={nombre}
            disabled
            placeholder="Tu Nombre Completo"
            className="p-3 rounded border focus:outline-slate-300 text-slate-600 bg-slate-400"
            onChange={e=> setNombre(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-semibold" htmlFor="telefono">Telefono Personal</label>
          <input
            type="number"
            placeholder="961 000 0000"
            className=" appearance-none p-3 rounded  border focus:outline-slate-300 text-slate-700"
            onChange={e=> setTelefono(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-semibold" htmlFor="nombre_tutor">Nombre del tutor</label>
          <input
            type="text"
            placeholder="Nombre del tutor"
            className="p-3 rounded  border focus:outline-slate-300 text-slate-700"
            onChange={e=> setNombreTutor(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-semibold" htmlFor="telefono">Telefono de Tutor</label>
          <input
            type="number"
            placeholder="961 000 0000"
            className="p-3 rounded  border focus:outline-slate-300 text-slate-700"
            onChange={e=> setTelTutor(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-semibold" htmlFor="nombre_tutor">Institucion Educativa</label>
          <input
            type="text"
            placeholder="Universidad Politecnica De Chiapas"
            className="p-3 rounded  border focus:outline-slate-300 text-slate-700"
            onChange={e=> setInstitucion(e.target.value)}
          />
        </div>
        <input type="submit" value='Enviar' className="lg:col-span-2 bg-sky-950 text-white p-3 font-semibold cursor-pointer"/>
      </form>
    </main>
  );
}
