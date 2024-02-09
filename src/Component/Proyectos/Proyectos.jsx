
import { Card } from "./Card";
import DATOS from './ListProyectos.json'

const Proyectos = () => {

  return (
    <section id='proyectos' className=" w-full bg-sky-950 px-10 lg:px-16 pt-10 lg:pt-28 pb-20 pb-40"
    >
      <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase leading-none pt-8 '>proyectos</h5>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5 pt-20">
        {DATOS.map((card) => (
          <div key={card.id}>
            <Card
              titles={card.title}
              subtitles={card.subtitle}
              images={card.image}
              alt={card.alt}
              git={card.git}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos