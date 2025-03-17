import { lessonInfo } from "../constant"

const Courses = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full items-center px-6 " >
      {lessonInfo.map((item) => (
        <div className="flex items-center m w-full xl:w-[90%] flex-col max-lg:my-12 my-14 md:h-[470px] " key={item.id}  >
          <img  className=" w-full                   max-sm:h-[240px] max-md:w-[85%] max-md:h-[300px] xl:w-[90%] max-xl:h-[230px] xl:h-[340px]   "  src={item.img}  />
          <div  className="px-3 pb-4 bg-[#FAFAFA]  max-sm:h-[250px] max-md:w-[85%]                  xl:w-[90%] max-xl:h-[230px] xl:h-[200px]    "   >
            <h1  className="text-[#1EAAF1]  text-3xl font-semibold mb-4   "  >
              {item.title}
            </h1>
            <span className="flex text-[#FDA638] text-lg mb-6" >   وقت الحصة :  
              <span className="text-black pr-2" >   {item.time}   </span>
            </span>
            <p  className="text-[#7D7D8D]"  >  {item.text} </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Courses