import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Habitacion() {
  const bedroom = {
    id: 1,
    numero: "2D",
    descripcion:
      "Una recamara que tiene 2 camas y que consta con un banio una regadera y aire acondicionado para estas epocas de calor",
    foto_banio:
      "https://www.jkath.com/wp-content/uploads/2022/12/4603_Arden_Ave_024-copy.jpg",
    foto_general: "https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg",
    foto_closet:
      "https://www.eurorite.com/wp-content/uploads/2021/03/AdvantageFlex-Hanging-Closet-White_FLAT-1-1-scaled.jpg",
    foto_frigobar:
      "https://www.mercadazo.com.mx/122055-large_default/frigobar-24pies-refigerador-digital-tactil-luz-led-85-latas.jpg",
    status: "ocupado",
    edificio: "1D",
  };
  const [imagenes, setImagenes] = useState({
    num1: bedroom.foto_general,
    num2: bedroom.foto_banio,
    num3: bedroom.foto_closet,
    num4: bedroom.foto_frigobar,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <div className="flex flex-col xl:flex-row-reverse p-10 gap-10 bg-gradient-to-r from-slate-800 to-slate-600">
        <Slider className="xl:w-1/2 " {...settings}>
          <img
            className=" h-96 object-cover"
            src={imagenes.num1}
            alt="imagenes"
          />

          <img
            className=" h-96 object-cover"
            src={imagenes.num2}
            alt="imagenes"
          />

          <img
            className=" h-96 object-cover"
            src={imagenes.num3}
            alt="imagenes"
          />

          <img
            className=" h-96  object-cover"
            src={imagenes.num4}
            alt="imagenes"
          />
        </Slider>
        <div className="flex flex-col gap-10 text-white">
          <h1 className="font-semibold text-4xl">Tu Habitacion</h1>

          <p className="text-2xl">{bedroom.descripcion}</p>
          <button className="mt-10  rounded lg:w-40 bg-sky-900 text-center py-4 hover:bg-sky-600 hover:-translate-y-3 text-xl transition-all">Pagar</button>
        </div>
        
      </div>
    </main>
  );
}
