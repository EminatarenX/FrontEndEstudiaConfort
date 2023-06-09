

function TablaEstudiantes({
  id, nombre,nombre_tutor,tel_tutor, institucion, 
  telefono, edificio, habitacion, renta}) {
  return (
   <tr className={renta === 'PENDIENTE' ? 'warning  ' : ''}>
    <td className="on-mobile">
      <p>{id}</p>
    </td>
    <td>
      <p>{nombre}</p>
    </td>
    <td>
      <p>{nombre_tutor}</p>
    </td>
    <td>
      <p>{tel_tutor}</p>
    </td>
    <td className="on-mobile">
      <p>{telefono}</p>
    </td>
    <td className="on-mobile">
      <p>{institucion}</p>
    </td>
    <td>
      <p>{edificio}</p>
    </td>
    <td className="on-mobile">
      <p>{habitacion}</p>
    </td>
    <td>
      <p>{renta}</p>
    </td>
   </tr>
  )
}

export default TablaEstudiantes