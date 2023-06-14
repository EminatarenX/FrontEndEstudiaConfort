// import "../styles/index.css";

export default function Index() {
  return (
    <main >
      <section className={`py-20 flex bg-degradado items-center justify-evenly  transition-all`}>
        
        <section className="animate-slide h-72 flex flex-col justify-center rounded-3xl gap-1 items-center" >
          <div className="h-16 w-16 relative bg-white rotate-45  ">
            <div className="h-10 w-10 relative bg-black top-2 left-2 rounded-l-md rounded-br-3xl"></div>
          </div>
          <h1 className="text-white text-center font-bold text-6xl">Estudia Confort</h1>
          <p className="text-white text-2xl text-center ">El mejor lugar para vivir</p>
        </section>
        <section className="animate-slide xl:grid grid-cols-4 gap-3 max-w-[800px] hidden ">
          <img className="col-span-1" src="https://gladstonehouse.agencydominion.net/uploads/2021/09/Gladstone_House_Guestroom-NoArt-King-1440x700.jpg" alt="" />
          <img className="col-span-3 row-span-2"  src="https://gladstonehouse.agencydominion.net/uploads/2021/09/Gladstone_House_Guestroom-NoArt-King-1440x700.jpg" alt="" />
          <img className="col-span-1"  src="https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg" alt="" />
          <img  src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
          <img  src="https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company.webp" alt="" />
          <img  src="https://www.bostonharborhotel.com/wp-content/uploads/2021/11/City-View-Suite-Bedroom_WEB-scaled.jpg" alt="" />
          <img className="col-span-1 md:col-span-1" src="https://www.designingbuildings.co.uk/w/images/d/db/Bedroom.jpg" alt="" />
        </section>

        

    </section>

    <section className={` flex flex-col justify-between items-center gap-20  py-20 px-20 xl:gap-64 xl:flex-row bg-sky-900 transition-all`}>
        <article className="animate-slide xl:h-[400px] flex flex-col gap-4 rounded-3xl ">
          <h1 className="text-white font-bold text-2xl text-center">Comodidad</h1>
          <p className="text-white text-center">Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos </p>
        </article>
        <article className="animate-slide xl:h-[400px] flex flex-col gap-4 rounded-3xl ">
          <h1 className="text-white font-bold text-2xl text-center">Renta de Departamentos</h1>
          <p className="text-white text-center">Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos</p>
        </article>
        <article className="animate-slide xl:h-[400px] flex flex-col gap-4 rounded-3xl ">
          <h1 className="text-white font-bold text-2xl text-center">Precios Accesibles</h1>
          <p className="text-white text-center">Mucho gusto mi nombre es emiliano nataren y somos chidos mMucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos Mucho gusto mi nombre es emiliano nataren y somos chidos</p>
        </article>
    </section>

    </main>
  );
}
