import { useState } from 'react'
import '../styles/registrarUsuario.css'
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
        msj: error.response.data.mensaje,
        error: true
      })
    }


    

  }

  return (
    <main className='contenedor-registro'>
      
      <form onSubmit={handleSubmit} className='formulario'>
      {error.error && <Alerta error={error.msj}/>}
        <label className='label-input' htmlFor="nombre">Nombre completo</label>
        <input className='input-login' id='nombre' type="text" placeholder='Nombre completo'
          onChange={e=> setNombre(e.target.value)}
        />
        <label className='label-input' htmlFor="correo">Correo electronico</label>
        <input className='input-login' type="text" id='correo' placeholder='Correo'
          onChange={e=> setCorreo(e.target.value)}
        />
        <label className='label-input' htmlFor="password">Contraseña</label>
        <input className='input-login' type="password" id='password' placeholder='Contraseña'
          onChange={e=> setPassword(e.target.value)}
        />
        <label className='label-input' htmlFor="repetir">Confirmar contraseña</label>
        <input className='input-login' type="password" placeholder='Repetir contraseña' 
          onChange={e=> setRepetir(e.target.value)}
        />

        <input className='submit' type="submit"/>
      </form>

    </main>
  )
}

export default SignInStudent