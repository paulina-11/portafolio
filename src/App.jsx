import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Component/Hero/Hero"
import Header from "./Component/Navbar/Header"
import Sobremi from "./Component/Sobremi/Sobremi"
import Proyectos from "./Component/Proyectos/Proyectos"
import Contactos from "./Component/Contactos/Contactos"
import Footer from "./Component/Footer/Footer"
import { useEffect, useState } from "react"
import Skills from "./Component/Skills/Skills"




const App = () => {
  const [scrolear, setScrolear] = useState(false)
  useEffect(() => {
    const hacerScroll = () => {
      if (window.scrollY > 1000) {
        setScrolear(true);
      } else {
        setScrolear(false);
      }
    };

    window.addEventListener('scroll', hacerScroll);

    return () => {
      window.removeEventListener('scroll', hacerScroll);
    };
  }, [scrolear]);

  return (
    <>
      <Header scrolear={scrolear} />
      <Hero />
      <Sobremi scrolear={scrolear} />
      <Skills scrolear={scrolear} />
      <Proyectos />
      <Contactos />
      <Footer />

    </>
  )
}

export default App

