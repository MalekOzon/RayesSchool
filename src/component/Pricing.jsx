import { price } from "../constant";

const Pricing = () => {
  return (
    <div className="w-full h-auto max-md:h-[1700px] max-lg:h-[1000px]   sm:mb-56  md:mb-[900px] lg:mb-0 ">
      <div className="flex justify-center items-center mx-[7.5%] w-[90%] max-lg:flex-col  ">
        {price.map((item) => (
          <div
            key={item.id}
            className="m-5 bg-[#FAFAFA] w-[45%] max-w-[400px] h-auto rounded-lg shadow-md p-6 max-lg:w-full" >
            <h3 className="text-3xl font-semibold text-center my-4 max-sm:text-2xl"> {item.title} </h3>
            <div className="flex justify-center items-center my-4">
              <span className="text-base text-[#7D7D7D] mx-1 max-sm:text-sm"> {item.period}/ </span>
              <span className="text-[#1EAAF1] text-2xl font-bold max-sm:text-xl">  {item.price} </span>
            </div>
            <img className="w-full h-[200px] object-cover my-4 rounded-md max-sm:h-[150px]" src={item.img} alt={item.title} />
            <p className="mb-5 text-center text-sm max-sm:text-xs"> {item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;