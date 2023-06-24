
export default function Habitacion({id,foto_banio,numero}) {
  return (
    <div key={id}>
    <img className="" src={foto_banio} alt="" />
    <article className="pt-2 text-black font-semibold text-center">
      <p className="text-xl">Habitacion: {numero}</p>
      <p>Ver Detalles</p>
    </article>
  </div>
  )
}
