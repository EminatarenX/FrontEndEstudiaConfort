import '../styles/alerta.css'
export default function Alerta({error}) {
  return (
    <div className="alerta">
      <p className="mensaje">{error}</p>  
    </div>
  )
}
