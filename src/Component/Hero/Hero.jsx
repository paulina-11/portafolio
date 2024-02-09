
const Hero = () => {

  return (
    <div id="inicio" className="w-full bg-teal-600 h-screen flex justify-center items-center px-10 lg:px-16 " >
      <div className='font-oswald font-semibold leading-tight tracking-tighter text-orange-100 text-left text-5xl md:text-8xl lg:text-[120px]  uppercase'>
        <h1 className="text-red-300" >
          Paulina Ávila
        </h1>
        <h2 className="animate-bounce animate-infinite">Frontend Developer Jr</h2>
        <div className="flex gap-5 justify-center items-center">
          <a target="_blank" className="w-0 mr-16" href="https://www.linkedin.com/in/paulina-avila-l93/" rel="noreferrer"><i className="bi bi-linkedin cursor-pointer text-orange-100 hover:text-red-300 text-6xl w-0"></i></a>
          <a target="_blank" className="w-0" href="https://github.com/paulina-11" rel="noreferrer"><i className="bi bi-github cursor-pointer text-orange-100 hover:text-red-300 text-6xl w-0"></i></a>
        </div>
      </div>
    </div>


  )
}

export default Hero