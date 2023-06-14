
export default function Alerta({error}) {
  return (
    <div className="flex bg-rojo h-8 items-center justify-center p-4 animate-entrada rounded-lg">
      <p className="text-white font-bold">{error}</p>  
    </div>
  )
}
