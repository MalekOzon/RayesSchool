import { Link, NavLink } from "react-router-dom"
import { navigation } from "../constant"
import {closeIcon, hamburgerIcon, logoFade} from "../assets/PhotoIndex"
import { useState } from "react"
import { HamburgerMenu } from "../design/Header";

const Header = () => {

  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const notActiveLink=`  px-6 py-4 max-md:py-5 text-xl lg:text-lg lg:font-semibold  lg:leading-5  xl:px-12${openNavigation ? `` : `` } `

  return (
    <div  className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm   bg-gradient-to-r from-[#3c8ce7] to-[#40cfdc] ${openNavigation ? `bg-none ` : ""} `} >
      <div className={`flex items-center px-5    bg-gradient-to-r from-[#3c8ce7] to-[#40cfdc] `} >
        <Link className="w-[5rem] m-3 max-md:w-[5rem] max-sm:w-[6rem] " to="/" onClick={() => setOpenNavigation(false)} >
          <img  src={logoFade} width={70} alt="Logo" />
        </Link>
        <nav className={`${openNavigation ? "flex mt-4 max-sm:mt-6" : "hidden"} fixed top-[4rem] left-0 right-0 bottom-0  lg:flex lg:static lg:mx-auto max-lg:bg-white  `} >
          <div className="relative z-50 flex flex-col   items-center justify-center m-auto lg:flex-row" >
            {navigation.map((item) => (
              <NavLink to={item.url} key={item.id} className={   ({isActive}) => isActive ? `${notActiveLink}
              bg-[#2e89df] text-white border border-none rounded-full ` : notActiveLink} onClick={toggleNavigation} >  {item.title}
              </NavLink>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <button className={`mr-auto px-3 lg:hidden z-50`} onClick={toggleNavigation} >
          { openNavigation ? <img src={closeIcon} width={40} /> : <img src={hamburgerIcon} width={30} /> }
        </button>
      </div>
    </div>
  )
}

export default Header
