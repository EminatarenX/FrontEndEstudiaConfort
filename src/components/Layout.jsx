import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function AdminLayout() {
  const [aside, setAside] = useState(false)
  
  return (
    <>
      <aside className={`fixed h-screen w-[300px] ${aside ? 'right-0': '-right-[300px]'} bg-slate-900 transition-all ease-in flex flex-col items-center py-20 gap-20`}>
        <Link to='/admin' className='text-2xl text-white hover:bg-sky-800 py-2 flex justify-center w-40 rounded transition-colors'>Panel</Link>
        <Link to='habitaciones' className='text-2xl text-white hover:bg-sky-800 py-2 flex justify-center w-40 rounded transition-colors'>Habitaciones</Link>
      </aside>
      <header className='flex p-5 border border-b-slate-300 justify-between items-center w-full'>
          <h1 className='text-3xl xl:text-4xl'>Estudia<span className='text-blue-600'>Confort</span><span className='text-xs'>Admin</span></h1>
          <span onClick={()=> setAside(!aside)} className={`text-lg xl:text-4xl z-10 ${aside ? 'text-white fixed right-5': 'text-black'} cursor-pointer transition-colors `}>&#9776;</span> 
  
      </header>
        <Outlet/>

    </>
  )
}

export default AdminLayout