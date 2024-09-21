import { logo_mf } from "../assets/index"

export  const HamburgerMenu = () => {
    return (
        <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute inset-0 opacity-[.1]">
          <img
            className="w-[100%] h-full object-contain"
            src={ logo_mf }
            
            alt="Background"
          />
        </div>
      </div>
    );
  };
  