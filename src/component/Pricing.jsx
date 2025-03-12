import { price } from "../constant"

const Pricing = () => {
  return (
    <div className="  w-full h-[500px]  max-md:h-[1700px] max-lg:h-[2200px]  " >
      <div className=" flex justify-center items-center mx-[7.5%] h-full w-[90%] max-lg:flex-col  "  >
        {price.map((item) => (
          <div className=" m-5 bg-[#FAFAFA] w-[20%] h-[90%]   max-lg:w-[80%]  " key={item.id} >
            <h3  className="  flex justify-center items-center  text-3xl font-semibold my-4   "  >   {item.title}  </h3>
            <div className="flex justify-center items-center my-4" >
              <span className="  mx-1 text-base text-[#7D7D7D] flex justify-center items-center  " >   {item.period}/  </span>
              <span className="   text-[#1EAAF1] text-2xl font-bold  flex justify-center items-center  "  >   {item.price} </span>
            </div>
            <img   className="  w-full my-4 h-[50%]    "  src={item.img} />
            <p className=" mb-5  flex justify-center items-center text-center  "  >   {item.text} </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing