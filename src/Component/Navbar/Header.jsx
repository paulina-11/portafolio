import Navbar from "./Navbar"
import Logo from "../../assets/logo.png"
// eslint-disable-next-line react/prop-types
const Header = ({ scrolear }) => {

  return (
    <header className={` ${scrolear ? ' bg-sky-950 pb-1 pt-1' : 'pb-3 pt-3  bg-teal-600 '}  z-50 fixed w-full px-10 lg:px-16 flex justify-between justify-center items-center  transition-all duration-500`}>
      <a href="#inicio"><img className="w-40" src={Logo} alt="logo" /></a>
      <div className="p-4"><Navbar scrolear={scrolear} /></div>
    </header>
  )
}

export default Header