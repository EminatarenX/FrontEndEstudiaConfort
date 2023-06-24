import { createContext, useEffect, useState } from "react";


const EstudiantesContext = createContext();

const EstudiantesProvider = ({ children }) => {

  const [habitacion, setHabitacion] = useState({
    descripcion: 'Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor',
  })

  useEffect(()=>{
    const obtenerHabitacion = async() => {
      const token = localStorage.getItem('token')
 
      if(!token) return
      
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`

          }
      }
      
      
    }
    obtenerHabitacion()
  },[])

  

  return (
    <EstudiantesContext.Provider
      value={{  
        
        habitacion
      }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
};

export { EstudiantesProvider };

export default EstudiantesContext;
