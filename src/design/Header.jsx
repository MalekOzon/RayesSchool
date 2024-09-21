import { logo_mf } from "../assets/PhotoIndex"

export  const HamburgerMenu = () => {
    return (
        <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute inset-0 opacity-[.1]">
          <img
            className="w-full h-full object-contain"
            src={ logo_mf }
            
            alt="Background"
          />
        </div>
      </div>
    );
  };
  