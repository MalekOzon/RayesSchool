import { useState } from "react"
import { closeIcon, quotes } from "../assets/PhotoIndex"
import { photos } from "../constant"
import { useLocation } from "react-router-dom";

const Photo = () => {

  const location = useLocation();
  const currentPathname = location.pathname;

  const [isOpen , setIsOpen] = useState(null)
  const [image , setImage] = useState(null)

  const handleImage = (url) => {
    setImage(url)
  }
  const handleIsOpen = ( index , url  ) => {
    setIsOpen(index + 1)
    handleImage(url)
  }
  const handleIsClosed = () => {
      setIsOpen(null)
    }
    
  return (
    <div className={`w-full relative  px-[5%] my-6  `}>
      <div className={`w-full grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2  gap-4    `}  >
        {photos.map((item , index) => {
          if ( item.id < (currentPathname.includes("/contact") ? 100 : 4 ) ) {
            return (
          <div className="w-full h-[18rem] relative group max-sm:py-5 " key={item.id}>
            <div   className={`w-full h-full filter group-hover:lg:brightness-50 ${isOpen ? "brightness-[0.2]" : ""} `} >
              <img  className="w-full h-full" src={item.url} />
            </div>
            <button className="group-hover:lg:block hidden top-[7rem] right-[12rem] absolute  max-xl:right-[7rem] "
            onClick={() => handleIsOpen( index, item.url )} >
              <img src={quotes} />
            </button>
            {/*  */}
            <div className={` absolute -top-[3rem] w-full h-full z-10    max-sm:hidden  ${isOpen % 3 === 0 ?   "xl:-right-[56rem] lg:-right-[40rem]" :
                ( isOpen % 3 === 2 ? "xl:-right-[26rem] lg:-right-[20rem]" : "right-[2rem]" )}
              ${ ( isOpen === item.id ) ? "block" : "hidden"}  `} >
              <div className="flex justify-center items-center w-[300%] h-[25rem] relative "
              >
                <img  className="w-[80%] h-[120%] border-4 border-blue-500 rounded-lg max-sm:w-full max-sm:h-[400px] "  src={image}  />
              </div>
            </div>
            <button className={`absolute -top-[4rem] z-20 ${isOpen % 3 === 0 ?   "xl:-right-[46rem] lg:-right-[33rem]" : ( isOpen % 3 === 2 ? "xl:-right-[15rem] lg:-right-[13rem]" : "xl:right-[13rem] lg:right-[9rem]" )} ${ ( isOpen === item.id ) ? "block" : "hidden"} `} onClick={handleIsClosed} >
              <img  className="w-[60px] max-sm:w-[50px] " src={closeIcon} />
            </button>
          </div>
          )}})}
      </div>          
    </div>
  )
}

export default Photo