import { serviceInfo } from "../constant/index"
import {motion} from "framer-motion"
const Service = () => {
  return (
    <div className={` flex items-center w-full  max-lg:flex-col lg:h-[400px] xl:h-[320px] `} >
    {
      serviceInfo.map((item) => (
        <motion.div 
        variants={{
        hidden: { x: item.id % 2 == 1 ?"-100%" : (item.id %2== 0 ? "100%" : 0)  , opacity: 0,},
        show: {   x: 0  , opacity: 1,
        transition: { type: "tween", delay: 0.2 ,  duration: 1 , ease: "easeOut", }, },}}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}


        key={item.id}
        className={`relative h-full w-full pb-[5rem] p-5 ${item.color} text-white flex justify-center md:pb-24 `}>
          <div className={` w-[8rem] h-[8rem] bg-white rounded-full flex justify-center items-center absolute top-[-4rem] max-sm:w-[5rem] max-sm:h-[5rem] max-sm:top-[-2.5rem] md:w-[6rem] md:h-[6rem] md:top-[-3rem] `} >
          <img  src={item.icon} width={40} className=" w-[50%] h-[50%] z-40"  />
          </div>
          <div >
            <h1 className=" pt-10 text-3xl font-bold font-serif flex justify-center text-center sm:pt-16 " > {item.title}</h1>
            <p className="pt-8 text-2xl mx-8 font-bold font-serif flex justify-center items-center  text-center" > {item.text} </p>
          </div>
        </motion.div>
      ))
    }
    </div>
  )
}

export default Service