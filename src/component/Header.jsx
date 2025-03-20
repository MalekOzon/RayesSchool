import { Link, NavLink } from "react-router-dom";
import { navigation } from "../constant";
import { closeIcon, hamburgerIcon, logoFade } from "../assets/PhotoIndex";
import { useState, useCallback } from "react";
import { HamburgerMenu } from "../design/Header";

const Header = () => {
  
  const navLinkClasses = {
    base: "px-5 py-3 max-md:py-5 text-xl lg:text-lg lg:font-semibold lg:leading-5 xl:px-12 transition-all duration-300 ease-in-out",
    active: "bg-[#2e89df] text-white border-none rounded-full",
  };

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = useCallback(() => {
    setOpenNavigation((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setOpenNavigation(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0  w-full z-50 lg:backdrop-blur-sm bg-gradient-to-r from-[#3c8ce7] to-[#40cfdc] 
        ${openNavigation ? "shadow-lg" : ""}`}
    >
      <div className="flex items-center px-5 h-full">
        <Link className="w-[5rem] m-3 max-md:w-[5rem] max-sm:w-[6rem] flex-shrink-0" to="/" onClick={handleNavClick}  aria-label="Home" >
          <img src={logoFade} width={70} alt="Company Logo" className="object-contain" loading="eager"  />
        </Link>

        <nav
          className={`${
            openNavigation
              ? "flex  max-sm:mt-6"
              : "hidden"
          }   fixed top-[4rem] left-0 right-0 bottom-0 lg:flex lg:static lg:mx-auto max-lg:bg-white`}
          aria-label="Main navigation"
        >
          <div className="relative z-50 my-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-2 lg:gap-4">
            {navigation.map((item) => (
              <NavLink
                to={item.url}
                key={item.id}
                className={({ isActive }) =>
                  `${navLinkClasses.base} 
                ${  isActive ? navLinkClasses.active : "hover:bg-[#2e89df]/10"}`}
                onClick={toggleNavigation}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <button
          className="mr-auto px-3 lg:hidden z-50 focus:outline-none focus:ring-2 focus:ring-[#2e89df]"
          onClick={toggleNavigation}
        >
          <img
            src={openNavigation ? closeIcon : hamburgerIcon}
            width={openNavigation ? 40 : 30}
            alt={openNavigation ? "Close menu" : "Open menu"}
            className="transition-transform duration-200"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;