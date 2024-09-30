import Offers from "../component/Offers"
import Counter from "../component/Counter"
import Overview from "../component/Overview"
import Heading from "../component/Heading"
import Quote from "../component/Quote"
import ImageHeader from "../component/ImageHeader"

const About = () => {
  return (
    <div>
      <ImageHeader paragraph=" عن المدرسة"/>
      <Offers />
      <Counter />
      <Heading first="ماذا يقول" second="الاباء حولنا" />
      <Overview />
      <Quote />
    </div>
  )
}

export default About