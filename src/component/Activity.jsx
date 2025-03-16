import { Link } from "react-router-dom"
import { activity } from "../constant"
import { useLocation } from 'react-router-dom';


const Activity = () => {

  const location = useLocation();
  const currentPathname = location.pathname;

    console.log(currentPathname.includes("teacher"))


  return (
    <div className=" w-full mb-32 lg:mb-72  " >
      <div  className="grid grid-cols-3 md:mx-[7.5%] h-full max-lg:grid-cols-1 lg:gap-y-40  "  >
        {activity.map((item) => {
          if ( item.id < (currentPathname.includes("blog") ? 10 : 4 ) ) {
            return (
        
          <div className=" bg-[#FAFAFA] my-4  lg:mx-5  max-lg:w-[500px] flex flex-col mx-auto max-sm:w-[70%] max-sm:h-[620px] xl:h-[600px] "  key={item.id}   >
            <div className="relative  " >
              <img   className="  h-[300px] w-full  "   src={item.img}   />
              <div  className="absolute w-[45px]  bottom-0 left-0 bg-purple-500 text-white">
                <span className=" flex justify-center items-center  text-2xl font-semibold">{item.datenum} </span>
                <span className=" flex justify-center items-center text-lg font-semibold text-center">{item.dateyear} </span>
              </div>
            </div>


            <div className="h-[100px] max-xl:h-[200px] max-sm:mb-8">
              <h3  className=" md:mr-6  m-2 my-5 text-2xl font-serif font-semibold">{item.title} </h3>
              <p className="px-6 text-lg pb-8" >{item.text}</p>
            </div>
            
            <Link
            to={`/blog/${item.id}`}
            className="rounded-full bg-orange-400 text-white p-2  w-[120px]  flex justify-center items-center text-xl font-bold 
                      lg:mt-28 max-lg:mb-7
            ">
            اقرأ المزيد</Link>
          </div>
          )
        }
      })
    }
      </div>
    </div>
  )
}

export default Activity