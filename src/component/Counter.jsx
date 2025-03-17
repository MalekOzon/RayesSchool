import  { useState, useEffect, useRef } from "react";
import Heading from "./Heading";
import { counterInfo } from "../constant";

const Counter = ({ paragraph }) => {
  const [counts, setCounts] = useState({});
  const counterRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initializeCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25, 
      }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const initializeCounters = () => {
    const counters = {};
    counterInfo.forEach((item) => {
      counters[item.id] = 0; 
    });
    setCounts(counters);
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const updatedCounts = { ...prevCounts };
        let allFinished = true;
        counterInfo.forEach((item) => {
          if (updatedCounts[item.id] < item.num) {
            updatedCounts[item.id] += Math.ceil(item.num / 100 ); 
            allFinished = false;
          }
        });
        if (allFinished) clearInterval(interval); 
        return updatedCounts;
      });
    }, 50); 
    return () => clearInterval(interval);
  };

 
  return (
    <div 
      className="w-fll h-[450px] bg-center bg-cover bg-fixed flex flex-col justify-center items-center
      text-center max-md:h-[800px] max-sm:h-[750px] max-sm:mt-12  bg-black bg-opacity-50 md:my-24  
      bg-[url('https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image.jpg')]  ">

      <Heading first="20 سنة من" second="الخبرة" paragraph={paragraph} className="text-white mb-10" />

      <div ref={counterRef}
        className="grid grid-cols-4 gap-8  max-md:grid-cols-2 w-full max-w-6xl px-4 py-8 rounded-lg
          shadow-lg bg-white bg-opacity-90 backdrop-blur-sm max-sm:grid-cols-2" >
        {counterInfo.map((item) => (
          <div
            key={item.id}
            className= "flex flex-col items-center space-y-4 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:bg-opacity-100   ">
            
            <span className="text-[#1EAAF1] text-5xl font-bold max-sm:text-4xl animate-puls" > {counts[item.id] || 0} </span>

            <span className="text-gray-700 text-xl font-semibold max-sm:text-lg" >  {item.title} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;