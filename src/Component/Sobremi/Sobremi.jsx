/* eslint-disable react/prop-types */
import Cv from "../../assets/files/PaulinaAvilaCV2024.pdf"

const Sobremi = ({ scrolear }) => {

  return (
    <div>
      <div id="sobremi" className={` ${scrolear ? 'bg-sky-950' : ' bg-teal-600 '} w-full flex flex-col md:flex-row lg:flex-row px-10 lg:px-16 pb-40 gap-20 pt-5 lg:pt-40 lg:pb-40 pb-1 transition-all duration-500 items-center transition-all duration-500`}
      >
        <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase leading-none text-center pt-10'> Sobre mi</h5>
        <div>
          <p className="text-orange-100 text-justify p-10 text-2xl indent-12">
            Soy un entusiasta de la tecnología y el aprendizaje autodidacta. A lo largo de estos años, he desarrollado habilidades técnicas en programación y desarrollo web que se complementan con mi sentido de responsabilidad, capacidad organizativa y habilidades de comunicación efectiva. Me especializo en la creación de interfaces interactivas y visualmente atractivas, y siempre estoy en búsqueda activa de oportunidades para ampliar mis conocimientos y mejorar mis habilidades.
          </p>
          <div className="text-center mt-4"><a className="btn btn-xl font-oswald text-orange-100 text-xl border border-orange-100 rounded p-3 cursor-pointer hover:bg-orange-100 hover:bg-orange-100 hover:text-red-300 uppercase" role="button" href={Cv} target="_blank" rel="noreferrer"><span>Descarga mi C.V.</span></a></div>
        </div>
      </div>

    </div>
  )
}

export default Sobremi