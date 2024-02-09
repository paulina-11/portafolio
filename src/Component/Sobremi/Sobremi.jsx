/* eslint-disable react/prop-types */
import Cv from "../../assets/files/front.pdf"

const Sobremi = ({ scrolear }) => {

  return (
    <div>
      <div id="sobremi" className={` ${scrolear ? 'bg-sky-950' : ' bg-teal-600 '} w-full flex flex-col md:flex-row lg:flex-row px-10 lg:px-16 pb-40 gap-20 pt-5 lg:pt-40 lg:pb-40 pb-1 transition-all duration-500 items-center transition-all duration-500`}
      >
        <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase leading-none text-center pt-10'> Sobre mi</h5>
        <div>
          <p className="text-orange-100 text-justify p-10 text-xl">
            Soy un entusiasta de la tecnología y del aprendizaje autodidacta. Mi enfoque se centra en la disciplina, la dedicación y el compromiso, valores que moldean mi rendimiento en tareas tanto simples como complejas. Mis habilidades técnicas en programación y desarrollo web, adquiridas en el último año, se complementan con mi sentido de responsabilidad, capacidad organizativa y habilidades de comunicación efectivas, las cuales considero esenciales en el actual entorno laboral. Mi especialización radica en la creación de interfaces interactivas y visualmente atractivas, y siempre estoy en la búsqueda activa de oportunidades para expandir mis conocimientos y habilidades.
          </p>
          <div className="text-center mt-4"><a className="btn btn-xl font-oswald text-orange-100 text-xl border border-orange-100 rounded p-3 cursor-pointer hover:bg-orange-100 hover:bg-orange-100 hover:text-red-300 uppercase" role="button" href={Cv} target="_blank" rel="noreferrer"><span>Descarga mi C.V.</span></a></div>
        </div>
      </div>

    </div>
  )
}

export default Sobremi