import { useState } from "react"
import { closeIcon, quotes } from "../assets/PhotoIndex"
import { photos } from "../constant"

const Photo = () => {

  const [isOpen , setIsOpen] = useState(false)

  const [image , setImage] = useState("")

  const handleImage = (url) => {
    setImage(url)
  }

  const handleIsOpen = ( url ) => {
    setIsOpen(!isOpen)
    handleImage(url)
  }
  const handleIsClosed = () => {
      setIsOpen(false)
    }
    
    console.log(isOpen )
  return (
    <div
    className="w-full  px-[5%] my-6"
    >
      <div
      className={`w-full  grid grid-cols-3 gap-4 ${isOpen ? "filter blur-sm brightness-[0.5]" : "" }`}
      >
        {photos.map((item ) => {
          if ( item.id < 8 )  {
          return (
          <div
          className="w-full bg-white  relative group  "
          key={item.id}
          >
            <div
            className={`w-full filter group-hover:brightness-50 `}
            >
              <img 
              className="w-full"
              src={item.url}
              />
            </div>
            
              <button
              className="  group-hover:block  hidden top-11 right-11 absolute "
              onClick={() => handleIsOpen( item.url )}
              >
                <img 
                src={quotes}
                />
              </button>
              
          </div>
          )}})}

      </div>
          <div
          className={` absolute top-96 h-screen right-0  w-full
            ${isOpen ? "" : "hidden"} z-40 
            `}
          >
            <div
            className="flex justify-center items-center h-full  "
            >
              <img 
              className="w-[55%] border-4 border-blue-500 rounded-lg shadow-orange-600"
              src={image}
              />
            </div>
          </div>
          <button
          className={`absolute top-[500px] right-12 z-50 
            ${isOpen ? "" : "hidden"}
            `}
          onClick={handleIsClosed}
          >
            <img 
            className="w-[100px]"
            src={closeIcon}
            />
          </button>
    </div>
  )
}

export default Photo