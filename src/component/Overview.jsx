import { useEffect, useState } from "react"
import { quotes } from "../assets/PhotoIndex"
import { parents } from "../constant"
import Slider from "react-slick"
import SimpleCarousel from "./SimpleCarousel"
const Overview = () => {
  
  const len = parents.length
  const [rightDiv , setRightDiv] = useState(0)
  const [midDiv , setMidDiv] = useState(len - 1)
  const [leftDiv , setLleftDiv] = useState(len - 2 )
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMidDiv(rightDiv);
      if (rightDiv === len - 1) {
        setRightDiv(0);
      } else {
        setRightDiv(rightDiv + 1);
      }
      setLleftDiv(midDiv);
    }, 1000 ); 
    
    return () => {
      clearInterval(interval);
      // console.log(rightDiv,"R")w
      // console.log(midDiv,"m")
      // console.log(leftDiv,"L")
      // console.log("---------------")
    };
  }, [rightDiv, len, midDiv]);

  const settings = {
    dots: true, // إظهار النقاط تحت الصور
    infinite: true, // تفعيل الدورة اللانهائية
    speed: 600, // سرعة الانتقال بين العناصر
    slidesToShow: 1, // عدد الشرائح المعروضة في نفس الوقت
    slidesToScroll: 1, // عدد الشرائح التي يتم تمريرها مع كل نقر
    arrows: true, // إظهار الأزرار للتنقل
    autoplay: true, // تشغيل التلقائي
    autoplaySpeed: 2000 , // سرعة التشغيل التلقائي
  };



  return (
    <SimpleCarousel />

    // <div className="w-full my-24    ">
    //     <Slider {...settings} className="flex justify-center items-center w-full relative h-[400px]  ">
    //     {Array.from({ length: 5 }).map((_, index) => (
          
    //     <div key={index}  className="flex relative w-full h-[400px] justify-center items-center   max-lg:hidden " >
    //       <img  className="rounded-xl w-[400px] h-[300px]" src={ parents[index].img } />
    //       <div className="flex flex-col justify-center relative">
    //         <p className="text-xl text-[#838181] mb-6 ">{parents[index].text} </p>
    //         <span className="text-lg font-semibold" >{parents[index].name}</span>
    //         <span  className=" text-blue-300"  >{parents[index].who}</span>
    //         <img  className="absolute top-0 right-10 -z-10 opacity-15 w-[100px]" src={quotes} />
    //       </div>
    //     </div>
    //     ))}
    //     </Slider>
    // </div>
  )
}

export default Overview