import '../styles/dashboard.css'
import useEstudiantes from '../hooks/useEstudiantes'

function Dashboard() {
  const {habitaciones, habitacion} = useEstudiantes()

  return (
    <main className='panel-estudiante appear'>
      <h1>Tu Habitacion</h1>
      <div>
        {habitacion ? 'Si hay' : 'no hay'}
      </div> 
      <section className='habitaciones'>
        <h1>Habitaciones</h1>
        {habitaciones.length!==0 ? 'hay habitaciones': 'no hay habitaciones'}
              
      </section>

      <section >

      </section>

    </main>
  )
}

export default Dashboard