const Contactos = () => {

  return (
    <div id='contactos' className=' w-full pb-28 lg:pb-40 bg-sky-950 px-10 lg:px-16 pt-10 lg:pt-36 overflow-hidden '>

      <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase leading-none '>Contacto</h5>

      <div className="pt-6 lg:pt-24 ">
        <div className="pb-14 lg:pb-14">
          <div className="flex justify-center items-center lg:pb-4">
            <i className="bi bi-envelope text-red-300 text-4xl w-0 pr-14"></i>
            <p className="text-orange-100 text-xl">paulinavila.lopez@gmail.com</p>
          </div>
          <div className="flex justify-center items-center">
            <i className="bi bi-geo-alt text-red-300 text-4xl w-0 pr-14"></i>
            <p className="text-orange-100 text-xl">México, CDMX</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center ">
          <a target="_blank" className="w-0 mr-16" href="https://www.linkedin.com/in/paulina-avila-l93/" rel="noreferrer"><i className="bi bi-linkedin cursor-pointer text-orange-100 hover:text-red-300 text-6xl w-0"></i></a>
          <a target="_blank" className="w-0" href="https://github.com/paulina-11" rel="noreferrer"><i className="bi bi-github cursor-pointer text-orange-100 hover:text-red-300 text-6xl w-0"></i></a>
        </div>
      </div>

    </div>
  )
}

export default Contactos