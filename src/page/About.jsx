import Offers from "../component/Offers"
import Counter from "../component/Counter"
import Overview from "../component/Overview"
import Heading from "../component/Heading"
import Quote from "../component/Quote"
import ImageHeader from "../component/ImageHeader"

const About = () => {
  return (
    <div>
      <ImageHeader paragraph=" عن المدرسة" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/800px-Staples_High_School%2C_Westport%2C_CT.jpg"/>
      <Offers />
      <Counter />
      <Heading first="ماذا يقول" second="الاباء حولنا" />
      <Overview />
      <Quote />
    </div>
  )
}

export default About