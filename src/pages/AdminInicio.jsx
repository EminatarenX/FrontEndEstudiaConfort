

function AdminInicio() {

  return (
    <main className="flex flex-col gap-5 p-2 mb-20">
      <h1 className="text-4xl mt-5 text-center">Bienvenido al panel de Administrador</h1>
      <p className="text-slate-600 text-2xl text-center">Tablas de Estudiantes</p>

      <article className="flex bg-slate-300 gap-10 py-5 px-3 overflow-x-scroll scroll-smooth">
        <section className="flex flex-col bg-slate-100 min-w-[350px] xl:min-w-[500px] border rounded-lg h-[600px] xl:h-[450px]">
          <div className="flex justify-between bg-white p-2 shadow-lg m-1 rounded">
            <h1 className="text-lg xl:text-md"><span className="mr-2 text-yellow-400 text-lg">&#9864;</span>Solicitudes</h1>
            <span className="text-slate-500">5 solicitudes</span>
          </div>
          <div className="p-2">
            <h1 className="text-slate-800 ">No hay registros</h1>
            <div className="bg-white rounded shadow-lg p-2 flex gap-2">
              <img src="" alt="imagen" />
              <div>
              <h2>Emiliano nataren</h2>
              <p>Universidad Politecnica de Chiapas</p>
              </div>
              

            </div>
          </div>
        </section>
        <section className="flex flex-col bg-slate-100 min-w-[350px] xl:min-w-[500px] border rounded-lg h-[600px] xl:h-[450px]">
        <div className="flex justify-between p-2 bg-white shadow-lg m-1 rounded">
            <h1 className="text-lg xl:text-md"><span className="mr-2 text-lg text-blue-600">&#9864;</span>Estudiantes rentando</h1>
            <span className="text-slate-500">5 estudiantes</span>
          </div>
          <div className="p-2">
            <h1 className="text-slate-800 ">No hay registros</h1>
          </div>
        </section>
        <section className="flex flex-col bg-slate-100 min-w-[350px] xl:min-w-[500px] border rounded-lg h-[600px] xl:h-[450px]">
        <div className="flex justify-between p-2 shadow-lg m-1 rounded">
            <h1 className="text-lg xl:text-md"><span className="mr-2 text-lg text-red-500">&#9864;</span>Pagos pendientes</h1>
            <span className="text-slate-500">5 pagos</span>
          </div>
          <div className="p-2">
            <h1 className="text-slate-800 ">No hay registros</h1>
          </div>
        </section>
        <section className="flex flex-col bg-slate-100 min-w-[350px] xl:min-w-[500px] border rounded-lg h-[600px] xl:h-[450px]">
        <div className="flex justify-between p-2 shadow-lg m-1 rounded">
            <h1 className="text-lg xl:text-md"><span className="mr-2 text-lg text-green-600">&#9864;</span>Pagos realizados</h1>
            <span className="text-slate-500">5 realizados</span>
          </div>
          <div className="p-2">
            <h1 className="text-slate-800 ">No hay registros</h1>
          </div>
        </section>

      </article>
      <p className="text-slate-600 text-2xl text-center">Buscar Estudiates</p>
      <form className="bg-slate-300 p-5 flex flex-col xl:flex-row justify-between">
        <div className="bg-white p-2 flex gap-3 items-center rounded">
        <label htmlFor="nombre">Ingresa la institucion del Estudiate</label>
        <input 
        className="p-2 shadow focus:outline-slate-200"
        type="text" name="nombre" id="nombre" placeholder="nombre del estudiante"/>
        </div>
        <div className="p2 flex flex-col items-center gap-2">
          <ul className="bg-slate-400 h-40 w-40 rounded"></ul>
          <ul className="h-5 rounded w-40 bg-slate-400"></ul>
          <ul className="h-5 rounded w-40 bg-slate-400"></ul>
        </div>
      </form>
    </main>
  );
}

export default AdminInicio;
