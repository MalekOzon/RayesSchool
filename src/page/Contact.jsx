import { useState } from "react"
import ImageHeader from "../component/ImageHeader"
import Photo from "../component/Photo"
import { motion } from "framer-motion"

const Contact = () => {



  return (
    <div>
      <ImageHeader paragraph=" تواصل معنا"/>
      <ImageHeader paragraph=" تواصل معنا"/>
    <motion.div
    className="bg-red-500 p-6 text-white"
    initial={{scale: 1.5}}
    animate={{scale: 0.5}}
    transition={{delay:0.2}}
    whileHover={{scale:1 , color: '#ffff22' ,}}
    >
      my name is malek 
    </motion.div>

    </div>
  )
}

export default Contact