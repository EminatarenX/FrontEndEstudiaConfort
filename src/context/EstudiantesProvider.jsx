import { createContext, useState } from "react";
import axios from "axios";

const EstudiantesContext = createContext();

const EstudiantesProvider = ({ children }) => {
  const [habitaciones, setHabitaciones] = useState([])
  const [habitacion, setHabitacion] = useState({})
  const [telefono, setTelefono] = useState('')
  const [nombre_tutor, setNombreTutor] = useState('')
  const [tel_tutor, setTelTutor] = useState('')
  const [institucion, setInstitucion] = useState('')
  

  return (
    <EstudiantesContext.Provider
      value={{
        habitaciones,
        habitacion
      }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
};

export { EstudiantesProvider };

export default EstudiantesContext;
