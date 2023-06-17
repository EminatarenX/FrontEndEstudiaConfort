
import useEstudiantes from '../hooks/useEstudiantes'
import { Link } from 'react-router-dom'

function Dashboard() {
  const {habitaciones, habitacion} = useEstudiantes()

  

  const bedrooms = [
    {
      id: 1,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
    {
      id: 2,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },    {
      id: 3,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },{
      id: 4,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
    {
      id: 5,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },    {
      id: 6,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
    {
      id: 7,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
    {
      id: 8,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },    {
      id: 9,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },{
      id: 10,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
    {
      id: 11,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },    {
      id: 12,
      numero: '2D',
      descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
      foto_banio: 'https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg',
      foto_general: 'https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg',
      foto_closet: 'https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg',
      foto_frigobar: 'https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg',
      status: 'ocupado',
      edificio: '1D'

    },
  ]

  return (
    <main className=''>
      
      <div>
        {Object.keys(habitacion).length !== 0 ? 'no hay '
        : (
          <div className='flex xl:flex-row  flex-col-reverse p-20 gap-10 xl:gap-52 bg-gradient-to-r from-slate-800 to-slate-600'>
             <img className='h-[300px] animate-entrada object-cover' src={bedrooms[0].foto_general} alt="" />
            <div className='flex flex-col gap-10 items-center xl:items-end text-white animate-entrada'>
              <h1 className='font-semibold text-4xl'>Tu Habitacion</h1>
             
              <p className='text-2xl text-center xl:text-end'>{bedrooms[0].descripcion} </p>
              <Link to='/dashboard/habitacion' className=' text-2xl '>Ver Detalles</Link>
            </div>
          </div>
        )}
      </div> 
      <h1 className='animate-entrada text-4xl text-center my-10 text-sky-900 font-semibold'>Habitaciones</h1>
      <section className='animate-entrada grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:mx-10 xl:mx-52 '>
        
        {bedrooms.length ===0 ? 'No hay habitaciones disponibles': (
          bedrooms.map((room, index) => (
            
            <div className={`${index === 3 && 'grid-item'}`} key={room.id} >
              <img className='' src={room.foto_banio} alt="" />
              <article className='pt-2 text-black font-semibold text-center'>
              <p className='text-xl'>Habitacion: {room.numero}</p>
              <p>Ver Detalles</p>

              </article>
              
            </div>
          ))
        )}
              
      </section>


    </main>
  )
}

export default Dashboard