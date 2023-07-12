import { createContext, useEffect, useState } from "react";
import ClienteAxios from "../config/ClienteAxios";
import Swal from "sweetalert2";

const EstudiantesContext = createContext();

const EstudiantesProvider = ({ children }) => {

  const [habitacion, setHabitacion] = useState({})
  const [habitaciones, setHabitaciones] = useState([])
  const [datosPersonales, setDatosPersonales] = useState({})
  const [alerta, setAlerta] = useState('')
  const [estudiantes, setEstudiantes] = useState([])
  const [cargando, setCargando] = useState(null)
  const [modal, setModal] = useState(false)
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState({})
  const [habitacionesAdmin, setHabitacionesAdmin] = useState([])
  const actualizarDatosPersonales = async datosActualizados => {

    const token = localStorage.getItem('token')

    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

      }
  }


    try {
      const {data} = await ClienteAxios.post('/usuario', datosActualizados, config)
      Swal.fire({
        title: 'Datos actualizados',
        icon: 'success'
      })
     setDatosPersonales(data)
     
      
    } catch (error) {
      setAlerta('No se pudo actualizar la informacion')
    }

  }

  const obtenerEstudiantes = async () => {

    
    const token = localStorage.getItem('token')

    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

      }
  }
  try {
    const {data} = await ClienteAxios('/admin', config)
   
    setEstudiantes(data)
  } catch (error) {
    setAlerta('No se pudo obtener la informacion de los estudiantes')
  }

}


    const obtenerDatosPersonales = async() => {
      const token = localStorage.getItem('token')
 
      if(!token) return
      
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`

          }
      }
      
      try {
        const {data} = await ClienteAxios.get('/usuario', config)
        setDatosPersonales(data)
        
      } catch (error) {
        setAlerta( 'No se pudo obtener la informacion del usuario')
      }
      
    }

    const rechazarSolicitud = async (id) => {

      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        await ClienteAxios.delete(`/admin/${id}`, config)

        Swal.fire({
          title: "Solicitud rechazada",
          icon: 'success',
          iconColor: '#60A5FA'
        })
        setModal(false)
      } catch (error) {


        Swal.fire({
          title: "No se pudo rechazar la solicitud",
          icon: 'error',
        })
      }
    }

    const cambiarEstado = async (id) => {
      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        await ClienteAxios.post(`/admin`,{id}, config)
     
        Swal.fire({
          title: 'Estado actualizado correctamente',
          icon: 'success',
          iconColor: '#60A5FA'
        })

        const estudianteEncontrado = estudiantes.find(estudiante => estudiante.solicitud_id === id)
        estudianteEncontrado.estado = 'pendiente' ? 'rentado' : 'pendiente'
        setEstudiantes([...estudiantes, estudianteEncontrado])  


        setModal(false)
      } catch (error) {
   
        Swal.fire({
          title: "No se poudo actualizar el estado",
          icon: 'error',
        })
      }
    }

    const obtenerHabitaciones = async () => {
      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await ClienteAxios('/habitacion', config)

        setHabitaciones(data)
      } catch (error) {
        setAlerta('No se pudo obtener la informacion de la habitacion')
      }

    }

    const obtenerHabitacionSeleccionada = async (id) => {

      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await ClienteAxios(`/habitacion/${id}`, config)
        setHabitacionSeleccionada(data.habitacion)

      } catch (error) {
        setAlerta('No se pudo obtener la informacion de la habitacion')
 
      }
    }

    const enviarSolicitud = async (body) => {
      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    
      try {
        await ClienteAxios.post(`/usuario/solicitud`,body, config)
        Swal.fire({
          title: 'Solicitud enviada',
          icon: 'success',
          iconColor: '#60A5FA'
        })
      } catch (error) {

        Swal.fire({
          title: `${error.response.data.msg}`,
          icon: 'error',
        })
      }
    }

    const submitHabitacion = async (habitacion, formdata) => {
      setCargando(true)
      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const imagenesConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await ClienteAxios.post(`/habitacion`, habitacion, config)
        let id
        setTimeout(() => {
          id = data.id_habitacion;
      
          
          const enviarImagen = async () => {
            try {
              const { data: datos } = await ClienteAxios.post(`/habitacion/imagen/${id}`, formdata, imagenesConfig);
  
              Swal.fire({
                title: 'Habitacion agregada',
                icon: 'success',
                iconColor: '#60A5FA'
              });
            } catch (error) {
              console.error('Error al enviar la imagen:', error);
            }finally{
              setCargando(false)
            }
          };
          
          enviarImagen();
        }, 3000);
      } catch (error) {

        Swal.fire({
          title: `${error.response.data.msg}`,
          icon: 'error',
        })
      } 
    }

    const obtenerHabitacionesAdmin = async () => {
      
      const token = localStorage.getItem('token')
      if(!token) return 

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await ClienteAxios('/admin/habitaciones', config)
     
        setHabitacionesAdmin(data)
      } catch (error) {
        setAlerta('No se pudo obtener la informacion de la habitacion')
      }
    }
    async function pagar(){

      // const fechaActual = new Date();
      // const mesActual = fechaActual.getMonth();
      // const fechaProximoMes = new Date();
      // fechaProximoMes.setMonth(mesActual + 1);
      // const datetimeProximoMes = fechaProximoMes.toISOString();
      const fechaActual = new Date();
      const fechaProximoMinuto = new Date(fechaActual.getTime() + 60000); // Sumamos 60000 milisegundos (1 minuto)
      const datetimeProximoMinuto = fechaProximoMinuto.toISOString();
      
      const token = localStorage.getItem('token')
      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
          }
      }
      try {
          const {data} = await ClienteAxios.post('/admin/pagar', {
              monto: 100,
              descripcion: 'pago de servicio mensual',
              fecha: datetimeProximoMinuto,
              }, config)
          alert('Pago realizado con exito')
      } catch (error) {
          console.log(error)
          alert('No se pudo realizar el pago')
      }

      
  }

  const eliminarHabitacion = async(id, body) => {
    
    setCargando(true)
    const token = localStorage.getItem('token')
    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const {data} = await ClienteAxios.delete(`/habitacion/${id}`,body, config)
      console.log(data)
    } catch (error) {
      console.log(error)
    }finally{ setCargando(false)}


  }

  const modificarHabitacion = async (id, body) => {
    setCargando(true)
    const token = localStorage.getItem('token')
    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try {
      await ClienteAxios.put(`/habitacion/${id}`,body, config)
      Swal.fire({
        title: 'Habitacion modificada',
        icon: 'success',
        showConfirmButton: false,
      })
    } catch (error) {
      Swal.fire({
        title: 'No se pudo modificar la habitacion',
        showConfirmButton: false,
      })

    }finally{ setCargando(false)}
  }

  const getIndex = async() => {
    setCargando(true)
    try {
      const {data} = await ClienteAxios('/public')

      setHabitaciones(data)
      setAlerta('')
    } catch (error) {
      setAlerta('No se pudo obtener las habitaciones')
    }finally{ setCargando(false)}
  }

  const cambiarEstadoRenta = async(body) => {
    const {id, renta} = body
 
    const token = localStorage.getItem('token')
    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try {
      await ClienteAxios.put(`/admin/renta/${id}`,body, config)
      Swal.fire({
        title: 'Estado de la renta modificado',
        icon: 'success',
      })

    } catch (error) {
      Swal.fire({
        title: 'No se pudo modificar la el estado de la renta',
      })
    }
  }

  const obtenerHabitacionUsuario = async() => {
    const token = localStorage.getItem('token')
    if(!token) return

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const {data} = await ClienteAxios('/usuario/habitacion', config)
      setHabitacion(data)
    } catch (error) {
      setAlerta('No se pudo obtener la informacion de la habitacion')
    }
  }

  return (
    <EstudiantesContext.Provider
      value={{  
        datosPersonales,
        habitacion,
        actualizarDatosPersonales,
        obtenerEstudiantes,
        estudiantes,
        obtenerDatosPersonales,
        cargando,
        rechazarSolicitud,
        cambiarEstado,
        modal,
        setModal,
        habitaciones,
        obtenerHabitaciones,
        obtenerHabitacionSeleccionada,
        habitacionSeleccionada,
        enviarSolicitud,
        submitHabitacion,
        obtenerHabitacionesAdmin,
        habitacionesAdmin,
        setHabitacionSeleccionada,
        pagar,
        eliminarHabitacion,
        modificarHabitacion,
        getIndex,
        alerta,
        cambiarEstadoRenta,
        obtenerHabitacionUsuario
      }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
};

export { EstudiantesProvider };

export default EstudiantesContext;
