import { useState } from "react"
import { leftArrow , rightArrow } from "../assets/PhotoIndex"
import { imageSlides } from "../constant/index" 

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
    className="relative w-full flex justify-center"
    >
      <div 
      className="h-full  "
      >
        {
          imageSlides.map((item , index) => (
            <div
            key={item.id}
            className={` w-full relative
              ${index === current ? `` : `` }`}
            >
              {/* {
                index === current && (
                <span
                className="absolute 
                top-[50%] right-[30%] z-10 flex justify-center 
                text-4xl text-black font-sans
                font-extrabold p-5  bg-slate-200
                "
                >
                  {item.caption}
                </span>)} */}
              {index === current && (
              <img 
                className="w-full opacity-90"
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