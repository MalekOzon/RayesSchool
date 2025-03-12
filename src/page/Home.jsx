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
import Photo from "../component/Photo"


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
      <Heading first="مدرسون" second="جيدون" paragraph={"المدرسون الجيدون  يزرعون المعرفة بحب وصبر، ويحفزون  الإبداع والتميز. هم قدوة يحتذى بها، وتترك أثراً إيجابياً مدى الحياة."}  />
      <TeacherComponent />
      <Heading first="دروسنا" second="المميزة" paragraph={"دروسنا المميزة تصمم لتكون مزيجاً بين العلم والمتعة، حيث نركز على تبسيط المفاهيم وتعزيز التفاعل لضمان فهم أعمق. من خلالها نهدف إلى إلهام الطلاب وإطلاق إمكاناتهم الكاملة بأساليب تعليمية مبتكرة ومفعمة بالحيوية."} />
      <Courses />
      <Counter paragraph={"تعني تراكم معرفة عميقة ومهارات فريدة في فهم احتياجات الطلاب وتطوير أساليب التعليم. هذه السنوات الطويلة شهدت تأثيراً مباشراً على أجيال، مع التركيز الدائم على التجديد والتكيف مع التغيرات لتوفير بيئة تعليمية مثالية."}/>
      <Heading first="ماذا يقول" second="الاباء حولنا" />
      <Overview />
      <Quote />
      <Heading first="أسعار" second="الصفوف" paragraph={"أسعار الصفوف مصممة لتكون مناسبة للجميع، مع الحفاظ على جودة التعليم العالية. نؤمن بأن الاستثمار في العلم لا يُقاس بالتكلفة، بل بقيمة المعرفة  وتأثيرها الإيجابي على حياة الطلاب."} />
      <Pricing />
      <Heading first="نشاطاتنا" second="الرائعة" paragraph={"مزيج من الإبداع والتعليم، حيث نسعى لجعل التعلم تجربة ممتعة ومليئة بالحيوية. من خلالها، نشجع الطلاب على المشاركة، التعبير عن أنفسهم، وتطوير مهارات جديدة في بيئة مليئة بالحماس والتفاعل الإيجابي."} />
      <Activity />
      <Photo />
    </div>
  )
}

export default Home