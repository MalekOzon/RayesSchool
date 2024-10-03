import { useEffect, useState } from "react"
import { quotes } from "../assets/PhotoIndex"
import { parents } from "../constant"

const Overview = () => {
  
  const len = parents.length
  const [rightDiv , setRightDiv] = useState(0)
  const [midDiv , setMidDiv] = useState(len - 1)
  const [leftDiv , setLleftDiv] = useState(len - 2 )

  useEffect(() => {
    const interval = setInterval(() => {
      setMidDiv(rightDiv);
      if (rightDiv === len - 1) {
        setRightDiv(0);
      } else {
        setRightDiv(rightDiv + 1);
      }
      setLleftDiv(midDiv);
    }, 4000); 
  
    return () => {
      clearInterval(interval);
      // console.log(rightDiv,"R")w
      // console.log(midDiv,"m")
      // console.log(leftDiv,"L")
      // console.log("---------------")
    };
  }, [rightDiv, len, midDiv]);



  return (
    <div
    className="w-full my-10 h-[25rem]
    "
    >
      <div
      className="flex w-[90%] mx-[5%] overflow-x-hidden h-[80%]
      "
      >
        {/* 0000000000000000000000000000000000000000 */}
        <div
        className="flex min-w-[40%] justify-center items-center mx-10 -mr-32 pl-10 opacity-25
        max-lg:hidden
        " 
        >
          <div
            className="w-[40%] flex justify-center pl-2   "
            >
            <img 
            className="rounded-full h-[120px] w-[380px]"
            src={ parents[rightDiv].img}
            />
          </div>
          <div
          className="flex flex-col pr-3  relative"
          >
            <p
            className="text-xl text-[#838181] mb-6"
            >{parents[rightDiv].text} </p>
            <span
            className="text-lg font-semibold"
            >{parents[rightDiv].name}</span>
            <span
            className=" text-blue-300"
            >{parents[rightDiv].who}</span>
            <img 
            className="absolute top-0 right-0 -z-10 opacity-15 w-[150px]"
            src={quotes}
            />
          </div>
        </div>
        {/* 1111111111111111111111111111111 */}
        <div
        className="flex min-w-[40%] justify-center items-center ml-10  pb-14
        max-lg:flex-col max-lg:m-0 max-lg:min-w-[100%]
        "
        >
          <div
            className="min-w-[140px] max-w-[140px] flex justify-center pl-2 max-lg:pb-7 max-lg:pt-24 "
            >
            <img 
            className="rounded-full h-[120px] w-full "
            src={parents[midDiv].img}
            />
          </div>
          <div
          className="flex flex-col pr-3  relative"
          >
            <p
            className="text-xl text-[#838181] mb-6"
            >{parents[midDiv].text}</p>
            <span
            className="text-lg font-semibold"
            >{parents[midDiv].name}</span>
            <span
            className=" text-blue-300"
            >{parents[midDiv].who}</span>
            <img 
            className="absolute top-0 right-0 -z-10 opacity-15 w-[150px]"
            src={quotes}
            />
          </div>
        </div>
        {/* 22222222222222222222222222222222 */}
        <div
        className="flex min-w-[40%] justify-center items-center mx-10 opacity-25
        max-lg:hidden
        "
        >
          <div
            className="w-[40%] flex justify-center pl-2   "
            >
            <img 
            className="rounded-full h-[120px] w-[380px]"
            src={parents[leftDiv].img}
            />
          </div>
          <div
          className="flex flex-col pr-3  relative"
          >
            <p
            className="text-xl text-[#838181] mb-6"
            >{parents[leftDiv].text}</p>
            <span
            className="text-lg font-semibold"
            >{parents[leftDiv].name}</span>
            <span
            className=" text-blue-300"
            >{parents[leftDiv].who}</span>
            <img 
            className="absolute top-0 right-0 -z-10 opacity-15 w-[150px]"
            src={quotes}
            />
          </div>
        </div>
        {/* --------------------------------------------- */}
      </div>
    </div>
  )
}

export default Overview