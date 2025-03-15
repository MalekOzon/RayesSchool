import { useState, useEffect } from 'react';
import { parents } from "../constant";

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // التحريك التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
    }, 3000); // كل 3 ثوانٍ

    return () => clearInterval(interval); // تنظيف الإنتيرفال عند الخروج
  }, []);

  // الانتقال إلى الشريحة السابقة
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? parents.length - 1 : prevIndex - 1
    );
  };

  // الانتقال إلى الشريحة التالية
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
  };

  return (
    <div className="carousel-container relative mx-auto my-10">
      {/* شريحة العرض */}
      <div className="relative rounded-lg overflow-hidden shadow-xl p-4 md:p-8 flex flex-col items-center">
       
        {/* الصورة */}
        <div className="w-full flex justify-center mb-4">
          <img
            className="rounded-xl w-[250px] h-[200px] md:w-[400px] md:h-[300px] object-cover"
            src={parents[currentIndex].img}
            alt={`Parent ${currentIndex}`}
          />
        </div>

        {/* النصوص */}
        <div className="text-center space-y-2 flex flex-col">
          <p className="text-base md:text-xl text-gray-600">{parents[currentIndex].text}</p>
          <span className="text-lg md:text-xl font-semibold">{parents[currentIndex].name}</span>
          <span className="text-blue-300 text-sm md:text-base">{parents[currentIndex].who}</span>
        </div>
        
      </div>

      {/* أزرار التنقل */}
      <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 z-10 md:px-8">
        <button
          onClick={prevSlide}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          &rarr;
        </button>
      </div>

      {/* النقاط المؤشرة */}
      <div className="carousel-indicators flex justify-center mt-4 space-x-2">
        {parents.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 mx-2 h-4 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;