import { useState } from "react"
import { card, leftArrow , rightArrow } from "../assets/PhotoIndex"
import { imageSlides } from "../constant/index" 
import logo from "../assets/logo.png"

// لسا بدا تعديل 

const Slider = () => {

  const [current , setCurrent] = useState(0)
  const length = imageSlides.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageSlides) || imageSlides.length <= 0) {
    return null;
  }

  return (
    <div
    className={`relative w-full flex justify-center
    `}
    >
      <div 
      className=" "
      >
        {
          imageSlides.map((item , index) => (
            <div
            key={item.id}
            className={` w-full relative 
              ${index === current ? `` : `` }`}
            >
              {
                index === current && (
                <span
                className="absolute  
                top-[20%] right-[26%] z-10 
                text-4xl text-[#48abcf] font-sans
                rounded-[4.125rem]
                font-extrabold p-5  
                flex justify-center
                max-[321px]:text-6xl
                max-[426px]:w-[14rem]
                max-[426px]:h-[15rem]
                max-[426px]:text-6xl
                max-[426px]:top-[20%]
                max-[426px]:right-[28%]
                sm:text-4xl
                sm:bg-slate-100
                sm:w-[17rem]
                sm:top-[10%]
                sm:right-[40%]
                "
                >
                  {item.caption}
                </span>)}
              {index === current && (
              <img 
                className="w-full opacity-90
                h-screen object-cover filter
                max-[426px]:blur
                "
                src={item.url} 
                alt={item.title} 
              /> )}
            </div>
          ))
        }
      </div>
      <button
      className="absolute left-1 top-[50%] z-20"
      onClick={prevSlide}
      >
        <img
        width={50}
        src={leftArrow} />
      </button>
      <button
      className="absolute right-1 top-[50%] z-20"
      onClick={nextSlide}
      >
        <img
        width={50}
        src={rightArrow} />
      </button>
      

    </div>
  )
}

export default Slider