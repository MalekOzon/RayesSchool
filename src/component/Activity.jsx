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
        
          <div className=" bg-[#FAFAFA] h-full  my-5 lg:mx-5  max-md:w-full mb-28 "  key={item.id}   >
            <div className="relative  h-[65%] max-md:w-full  " >
              <img   className="  h-full w-full  " src={item.img}   />
                <div  className="absolute w-[45px]  bottom-0 left-0 bg-purple-500 text-white    "  >
                  <span className="  flex justify-center items-center  text-2xl font-semibold  "  >    {item.datenum} </span>
                  <span  className="  flex justify-center items-center text-lg font-semibold text-center " >  {item.dateyear} </span>
                </div>
            </div>
            <h3  className=" md:mr-6  m-2 my-5 text-2xl font-serif font-semibold  " >  {item.title} </h3>
            <p className="px-6 text-lg pb-8" >   {item.text}
            </p>
            <Link
            to={`/blog/${item.id}`}
            className="rounded-full bg-orange-400 text-white p-4 mr-3  w-[120px]  flex justify-center items-center text-xl  font-bold mb-5   lg:w-[150px]  xl:w-[150px]  max-sm:w-[150px]   "  >
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