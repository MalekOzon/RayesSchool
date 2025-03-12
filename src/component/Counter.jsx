import Heading from "./Heading"
import { counterInfo } from "../constant"

const Counter = ({paragraph}) => {
  return (
    <div
      className='
      w-full h-[450px]
      bg-center bg-cover bg-fixed
      max-sm:h-[875px] 
      bg-[url("https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image.jpg")]
      '
    >
      <Heading first="20 سنة من" second="الخبرة" paragraph={paragraph} className="text-black" />
      <div
      className="grid grid-cols-4 max-sm:grid-cols-1
      max-md:grid-cols-2 w-full 
      "
      >
        
          {counterInfo.map((item) => (
            <div
            className="mx-5 flex flex-col"
            key={item.id}
            >
              <span
              className="text-[#1EAAF1]
              text-6xl font-bold pb-8 flex justify-center
              max-sm:text-5xl
              max-sm:pb-2
              "
              >
                {item.num}
              </span>
              <span
              className="text-2xl font-semibold
              text-white flex justify-center
              max-sm:pb-10
              "
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Counter