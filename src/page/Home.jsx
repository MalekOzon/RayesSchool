import Courses from "../component/Courses"
import Heading from "../component/Heading"
import HideImage from "../component/HideImage"
import Offers from "../component/Offers"
import Overview from "../component/Overview"
import Service from "../component/Service"
import Slider from "../component/Slider"
import Teacher from "../component/Teacher"
import Counter from "./Counter"


const Home = () => {
  const pra1=`
      يعيشون منفصلين. يتدفق نهر صغير يسمى 
      دودن بجوار مكانهم 
      ويزوده بالريجيليا الضرورية.
      إنها دولة جنة.
      يعيشون منفصلين. يتدفق نهر صغير يسمى 
      دودن بجوار مكان
      `
  return (
    <div
    >
      <Slider />
      <Service />
      <Offers />
      <HideImage />
      <Heading first="مدرسون" second="جيدون" paragraph={pra1}  />
      <Teacher />
      <Heading first="دروسنا" second="المميزة" paragraph={pra1} />
      <Courses />
      <Counter paragraph={pra1}/>
      <Overview />
    </div>
  )
}

export default Home