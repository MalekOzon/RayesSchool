import { Link } from "react-router-dom"
import { leftArrow } from "../assets/PhotoIndex"
import { footerLink, icons } from "../constant"
import { logoFade } from "../assets/PhotoIndex"

const Footer = () => {
  return (
    <div  className=" w-full]  bg-black  text-white  flex justify-center items-center text-lg py-12   " >
      <div className="flex justify-evenly items-center w-full  max-lg:flex-col max-lg:py-4 pb-11 ">
        <div  className="px-8" >
          <h1>  هل لديك سؤال ؟ </h1>
          {icons.map((item) => (
            <div className="flex justify-start items-center py-3"  key={item.id}  >
              <img   className="pl-3 w-16"  src={item.img}  />
              <p>   {item.text}  </p>
            </div>
          ))}
        </div>
        <div className="px-8 max-lg:py-16 max-lg:flex-col"  >
          <h1>  روابط مهمة </h1>
          {footerLink.map((item) => (
            <Link
            to={item.url}
            className="flex justify-start  items-center hover:bg-[#2E89DF] rounded-full px-2 "  key={item.id}
            >
              <img  className=" w-10 py-2"  src={leftArrow}  />
              <p  className="pr-1"  >  {item.title} </p>
            </Link>
          ))}
        </div>
        <div  className=" w-[25%] h-full lg:flex-col max-lg:hidden"  >
          <img   className=" w-[50%] h-[50%] mr-20 "  src={logoFade}    /> 
        </div>
      </div>
    </div>
  )
}

export default Footer