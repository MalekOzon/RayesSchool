import ImageHeader from "../component/ImageHeader"
import { motion } from "framer-motion"
import Information from "../component/Information"
import Quote from "../component/Quote"

const Contact = () => {



  return (
    <div>
      <ImageHeader paragraph="تواصل معنا" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/800px-Staples_High_School%2C_Westport%2C_CT.jpg"/>
      <Information />
      <Quote />
    </div>
  )
}

export default Contact