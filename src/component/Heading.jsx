
import { motion } from "framer-motion"
const Heading = ({first ,second, paragraph,className}) => {
  return (
    <motion.div
      className=" w-full flex flex-col justify-center items-center my-[60px] max-lg:my-14 overflow-hidden  " 
      variants={{
      hidden: {    x:(first=="مدرسون" || first=="20 سنة من" || first=="أسعار")?  100 : -100, opacity: 0   },
      show: {    x: 0, opacity: 1,
      transition: { type: "spring", delay: 0.2, duration: 1, ease: "easeOut"    },} }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
       
      <div className="my-8 z-[2]" >   
        <span className="text-[#1EAAF1] font-bold text-5xl max-sm:text-4xl   " >{first} </span>
        <span className="text-[#FDA638] font-bold text-5xl max-sm:text-4xl  " >{second}</span>
      </div>
      <p className={`text-[#7F7F7F] text-xl w-[70%] text-center ${className} `} >{ paragraph}</p>
     
    </motion.div>
  )
}

export default Heading