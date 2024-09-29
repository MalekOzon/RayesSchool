import Activity from "../component/Activity"
import Courses from "../component/Courses"
import Heading from "../component/Heading"
import HideImage from "../component/HideImage"
import Offers from "../component/Offers"
import Overview from "../component/Overview"
import Pricing from "../component/Pricing"
import Quote from "../component/Quote"
import Service from "../component/Service"
import Slider from "../component/Slider"
import TeacherComponent from "../component/TeacherComponent"
import Counter from "../component/Counter"


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
      <TeacherComponent />
      <Heading first="دروسنا" second="المميزة" paragraph={pra1} />
      <Courses />
      <Counter paragraph={pra1}/>
      <Heading first="ماذا يقول" second="الاباء حولنا" />
      <Overview />
      <Quote />
      <Heading first="أسعار" second="الصفوف" paragraph={pra1} />
      <Pricing />
      <Heading first="نشاطاتنا" second="الرائعة" paragraph={pra1} />
      <Activity />
      <Counter paragraph={pra1}/>
    </div>
  )
}

export default Home