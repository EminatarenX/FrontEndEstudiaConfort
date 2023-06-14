import { useState } from 'react'
import ClienteAxios from '../config/ClienteAxios'
import { useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import Swal from 'sweetalert2'

const SignInStudent = () => {

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [repetir, setRepetir] = useState('')
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if([nombre, correo, password, repetir].includes(''))
    {
      setError({
        msj: 'Faltan campos por llenar',
        error: true
      })
      
      
      return
    }

    if(password != repetir){
      setError({
        msj: 'Las contraseñas tienen que ser iguales',
        error: true
      })
      
      return

    }
   
    const usuario = {
      nombre,
      correo,
      password,
    }

    try {

      const respuesta = await ClienteAxios.post('/auth/usuario/registro',usuario)

      Swal.fire({
        icon: 'success',
        title: `${respuesta.data.mensaje}`
        
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000);

    } catch (error) {
      setError({
        msj: "Error de Conexion",
        error: true
      })
    }


    

  }

  return (
    <main className='flex justify-center bg-degradado fixed h-full w-full'>

      <form onSubmit={handleSubmit} className='animate-entrada mt-14 flex flex-col gap-2'>
      <h1 className='mb-4 text-white text-4xl font-bold'>Bienvenido, regístrate <span>aquí</span></h1>
      {error.error && <Alerta error={error.msj}/>}
        <label className='text-xs capitalize text-white' htmlFor="nombre">Nombre completo</label>
        <input className='border border-gray-300 p-1 text-s rounded transition-all focus:outline-sky-500 active:scale-105' id='nombre' type="text" placeholder='Nombre completo'
          onChange={e=> setNombre(e.target.value)}
        />
        <label className='text-xs capitalize text-white' htmlFor="correo">Correo electronico</label>
        <input  className='border border-gray-300 p-1 text-s rounded transition-all focus:outline-sky-500 active:scale-105' type="email" id='correo' placeholder='Correo'
          onChange={e=> setCorreo(e.target.value)}
        />
        <label className='text-xs capitalize text-white' htmlFor="password">Contraseña</label>
        <input className='border border-gray-300 p-1 text-s rounded transition-all focus:outline-sky-500 active:scale-105' type="password" id='password' placeholder='Contraseña'
          onChange={e=> setPassword(e.target.value)}
        />
        <label className='text-xs capitalize text-white' htmlFor="repetir">Confirmar contraseña</label>
        <input className='border border-gray-300 p-1 text-s rounded transition-all focus:outline-sky-500 active:scale-105' type="password" placeholder='Repetir contraseña' 
          onChange={e=> setRepetir(e.target.value)}
        />

        <input className='mt-3 border-none h-10 bg-sky-500 text-white rounded capitalize font-bold text-lg transition-all hover:translate-y-[-5px] cursor-pointer' type="submit" value='Crear Cuenta'/>
      </form>

    </main>
  )
}

export default SignInStudent