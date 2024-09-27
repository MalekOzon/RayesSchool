import { lessonInfo } from "../constant"

const Courses = () => {
  return (
    <div
    className="grid grid-cols-2 max-lg:grid-cols-1
    
    "
    >
      {lessonInfo.map((item) => (
        <div 
        className="flex m-5
        max-lg:flex-col h-[30rem]
        lg:h-[17rem]
        "
        key={item.id}
        >
          <img 
          className="w-[80%]
          max-xl:w-[40%]
          max-lg:w-full
          max-lg:h-[50%]
          "
          src={item.img}
          />
          <div
          className="bg-[#FAFAFA]
          pr-5 pt-5
          "
          >
            <h1
            className="text-[#1EAAF1]
            text-3xl font-semibold mb-4
            "
            >
              {item.title}
            </h1>
            <span
            className="flex text-[#FDA638] text-lg mb-6"
            >
               وقت الحصة :  
                <span 
                className="text-black pr-2" >
                  {item.time}
                </span>
            </span>
            <p
            className="text-[#7D7D8D]"
            >
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Courses