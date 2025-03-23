import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { parents } from "../constant";
import { leftArrow, rightArrow } from "../assets/PhotoIndex";

const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? parents.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative mx-auto my-10">
      <div className="relative rounded-lg overflow-hidden shadow-xl p-4 md:p-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                className="rounded-xl w-[250px] h-[200px] md:w-[400px] md:h-[300px] object-cover"
                src={parents[currentIndex].img} alt={`img ${currentIndex}`}/>
            </div>
            <div className="text-center space-y-2 flex flex-col">
              <p className="text-base md:text-xl text-gray-600"> {parents[currentIndex].text} </p>
              <span className="text-lg md:text-xl font-semibold">  {parents[currentIndex].name}</span>
              <span className="text-blue-300 text-sm md:text-base">  {parents[currentIndex].who}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 z-10 md:px-8">
        <button onClick={prevSlide} className="bg-gray-300 text-white p-2 rounded-full transition duration-300 hover:bg-gray-800 focus:outline-none" >
        <img src={rightArrow} alt="Previous" width={30} />
        </button>
        <button  onClick={nextSlide}  className="bg-gray-300 text-white p-2 rounded-full transition duration-300 hover:bg-gray-800 focus:outline-none"  >
        <img src={leftArrow} alt="Previous" width={30} />
        </button>
      </div>
      <div className=" flex justify-center mt-4 space-x-2">
        {parents.map((_, index) => (
          <span  key={index} onClick={() => setCurrentIndex(index)} className={`w-4 mx-2 h-4 rounded-full cursor-pointer
              ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400' }`} ></span>
        ))}
      </div>
    </div>
  );
};

export default Overview;



// use framer motion to animate 

// import { useState, useEffect } from 'react';
// import { parents } from "../constant";
// import { leftArrow, rightArrow } from "../assets/PhotoIndex";

// const Overview = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
//     }, 3000);

//     return () => clearInterval(interval); 
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? parents.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
//   };

//   return (
//     <div className=" relative mx-auto my-10">
//       <div className="relative rounded-lg overflow-hidden shadow-xl p-4 md:p-8 flex flex-col items-center">
//         <div className="w-full flex justify-center mb-4">
//           <img className="rounded-xl w-[250px] h-[200px] md:w-[400px] md:h-[300px] object-cover" src={parents[currentIndex].img} alt={`img ${currentIndex}`}  />
//         </div>
//         <div className="text-center space-y-2 flex flex-col">
//           <p className="text-base md:text-xl text-gray-600">{parents[currentIndex].text}</p>
//           <span className="text-lg md:text-xl font-semibold">{parents[currentIndex].name}</span>
//           <span className="text-blue-300 text-sm md:text-base">{parents[currentIndex].who}</span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 z-10 md:px-8">
//         <button onClick={prevSlide} className="bg-gray-300 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none" >
//         <img src={rightArrow} alt="Previous" width={30} />
//         </button>
//         <button  onClick={nextSlide}  className="bg-gray-300 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"  >
//         <img src={leftArrow} alt="Previous" width={30} />
//         </button>
//       </div>

//       <div className=" flex justify-center mt-4 space-x-2">
//         {parents.map((_, index) => (
//           <span  key={index} onClick={() => setCurrentIndex(index)} className={`w-4 mx-2 h-4 rounded-full cursor-pointer
//               ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400' }`} ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Overview;