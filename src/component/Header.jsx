import { Link, NavLink } from "react-router-dom"
import { navigation } from "../constant"
import {closeIcon, hamburgerIcon, logo_mf} from "../assets/index"
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

  console.log(openNavigation)

  const notActiveLink=`
        px-6 py-4 max-md:py-5 text-xl
        lg:text-lg lg:font-semibold
        lg:leading-5  xl:px-12
        ${openNavigation ? `` : `` }

    `

  return (
    <div 
    className={`fixed top-0 left-0 w-full z-50
    lg:backdrop-blur-sm 
    bg-gradient-to-l from-[#d0c19a] to-[#dab454]
    ${openNavigation ? `bg-none ` : ""}
    `}
    >
      <div
      className={`flex items-center px-5 
      
      `}
      >
        <Link
        className="w-[5rem] m-3 max-md:w-[5rem] max-sm:w-[6rem] "
        to="/"
        >
          <img 
          src={logo_mf}
          alt="Logo"
          />
        </Link>

        <nav
        className={`${openNavigation ? "flex" : "hidden"}
        fixed top-[5rem] left-0 right-0 bottom-0 
        lg:flex lg:static lg:mx-auto  `}
        >
          <div
            className="relative z-50 flex flex-col
              items-center justify-center m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <NavLink
              to={item.url}
              key={item.id}
              className={({isActive}) => isActive ?
              `${notActiveLink}
              bg-[#009F6B] text-white border border-none
                rounded-full ` : notActiveLink}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <button
          className={`mr-auto px-3 lg:hidden z-50`}
          onClick={toggleNavigation}
        >
          {
            openNavigation ?
            <img
            src={closeIcon}
            width={60}
            />
            :
            <img
            src={hamburgerIcon}
            width={35}
            />
          }
        </button>
      </div>
    </div>
  )
}

export default Header
