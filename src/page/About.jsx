import Slider from "../component/Slider"
import Offers from "../component/Offers"
import Counter from "../component/Counter"
import Overview from "../component/Overview"
import Heading from "../component/Heading"
import Quote from "../component/Quote"

const About = () => {
  return (
    <div>
      <Slider />
      <Offers />
      <Counter />
      <Heading first="ماذا يقول" second="الاباء حولنا" />
      <Overview />
      <Quote />
    </div>
  )
}

export default About