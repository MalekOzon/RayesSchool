import { lessonInfo } from "../constant"

const Courses = () => {
  return (
    <div className="grid grid-cols-2 max-xl:grid-cols-1 w-full items-center px-6 " >
      {lessonInfo.map((item) => (
        <div className="flex items-center  w-full xl:w-[90%] max-xl:flex-col max-lg:my-12 my-8 " key={item.id}  >
          <img  className=" w-[260px]   h-[220px]    max-xl:w-[80%] max-xl:h-[400px] "  src={item.img}  />
          <div  className="bg-[#FAFAFA]  max-xl:w-[80%] max-xl:h-[200px] pr-5 pt-5  "  >
            <h1  className="text-[#1EAAF1]  text-3xl font-semibold mb-4   "  >
              {item.title}
            </h1>
            <span className="flex text-[#FDA638] text-lg mb-6" >   وقت الحصة :  
                <span   className="text-black pr-2" >   {item.time}   </span>
            </span>
            <p  className="text-[#7D7D8D]"  >  {item.text} </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Courses