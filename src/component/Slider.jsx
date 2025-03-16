import { useState, useEffect } from "react";
import { leftArrow, rightArrow } from "../assets/PhotoIndex";
import { imageSlides } from "../constant/index";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = imageSlides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[90vh] sm:h-[88vh] flex justify-center">
      <div className="w-full relative overflow-hidden">
        {imageSlides.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-85"
            }`}
          >
            {index === current && (
              <>
                <img className="w-full h-full object-cover opacity-90" src={item.url} alt={item.title}/>
                <div className="absolute inset-y-0   inset-x-0 z-10 flex flex-col justify-center items-center text-center bg-black bg-opacity-35">
                  <h2 className="text-4xl font-bold text-white mb-4 max-sm:text-2xl"> {item.caption} </h2>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full shadow-md"
        onClick={prevSlide} >
        <img src={leftArrow} alt="Previous" width={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full shadow-md"
        onClick={nextSlide}>
        <img src={rightArrow} alt="Next" width={30} />
      </button>
    </div>
  );
};

export default Slider;