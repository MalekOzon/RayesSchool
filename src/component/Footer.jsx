import { Link } from "react-router-dom"
import { leftArrow } from "../assets/PhotoIndex"
import { footerLink, icons } from "../constant"

const Footer = () => {
  return (
    <div
    className="h-200px w-full
    bg-black  text-white
    flex justify-center items-center
    text-lg py-12 
    "
    >
      <div
      className="flex justify-evenly items-center w-full max-lg:flex-col max-lg:py-4"
      >
        <div
        className="px-8"
        >
          <h1>
            هل لديك سؤال ؟
          </h1>
          {icons.map((item) => (
            <div
            className="flex justify-between items-center py-3"
            key={item.id}
            >
              <img 
              className="pl-3 w-16"
              src={item.img}
              />
              <p>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div
        className="px-8 max-lg:py-16"
        >
          <h1>
            روابط مهمة
          </h1>
          {footerLink.map((item) => (
            <Link
            to={item.url}
            className="flex justify-between items-center hover:bg-[#2E89DF] rounded-full px-2"
            key={item.id}
            >
              <img 
              className=" w-10 py-2"
              src={leftArrow}
              />
              <p>
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div
        className="px-8"
        >
          تابعنا يا زميل
        </div>
      </div>
    </div>
  )
}

export default Footer