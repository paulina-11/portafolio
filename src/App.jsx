import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Component/Hero/Hero"
import Header from "./Component/Navbar/Header"
import Sobremi from "./Component/Sobremi/Sobremi"
import Proyectos from "./Component/Proyectos/Proyectos"
import Contactos from "./Component/Contactos/Contactos"
import Footer from "./Component/Footer/Footer"
import { useEffect, useState } from "react"
import Skills from "./Component/Skills/Skills"
import './App.css'


const App = () => {
  const [scrolear, setScrolear] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {isLoading && (
        <div className={`loader-container ${isFadingOut ? "fading-out" : ""}`}>
          <div className="loader"></div>
        </div>
      )}

      <div className={`app-content ${!isLoading ? "visible" : ""}`}>
        <Header scrolear={scrolear} />
        <Hero />
        <Sobremi scrolear={scrolear} />
        <Skills scrolear={scrolear} />
        <Proyectos />
        <Contactos />
        <Footer />
      </div>
    </>
  );
}

export default App

