import { serviceInfo } from "../constant/index"

const Service = () => {
  return (
    <div
        className={`
          flex items-center w-full
          max-lg:flex-col 
          `}
    >
    {
      serviceInfo.map((item) => (
        <div 
        key={item.id}
        className={`relative h-[345px] w-full
          p-5 ${item.color} text-white flex justify-center
          `}
        >
          <div 
            className={`
              w-[8rem] h-[8rem]
              bg-white rounded-full
              flex justify-center items-center
              absolute top-[-4rem]
              max-sm:w-[6rem]
              max-sm:h-[6rem]
              max-sm:top-[-3rem]
              
              `}
          >
          <img 
            src={item.icon}
            width={40}
            className="
            w-[50%] h-[50%]"
          />
          </div>
          <div
          className="
          
          "
          >
            <h1
            className="
            pt-10 text-4xl font-bold font-serif flex
            justify-center
            sm:pt-16
            "
            >
              {item.title}
            </h1>
            <p
            className="
            pt-8 text-2xl mx-8
            font-bold font-serif flex
            justify-center items-center
            
            "
            > {item.text} </p>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Service