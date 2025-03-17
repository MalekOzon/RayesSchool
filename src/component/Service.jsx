import { serviceInfo } from "../constant/index";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Service = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      className={`flex items-center w-full max-lg:flex-col lg:h-[400px] xl:h-[320px]`}
    >
      {serviceInfo.map((item) => {
        const animationProps = isMobile
          ? {
            initial: {
              x: item.id % 2 === 1 ? "30%" : "-30%",
              opacity: 0,
            },
            whileInView: { x: 0, opacity: 1 }, 
          }
          : {
                initial: {
                  x: item.id % 2 === 1 ? "30%" : "-30%",
                  opacity: 0,
                },
                whileInView: { x: 0, opacity: 1 }, 
            };
        return (
          <motion.div
            key={item.id}
            {...animationProps} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ type: "tween", delay: 0.2, duration: 1, ease: "easeOut", }}
            className={`relative h-full w-full pb-[5rem] p-5 ${item.color} text-white flex justify-center md:pb-24`}
          >
            <div
              className={`w-[8rem] h-[8rem] bg-white rounded-full flex justify-center items-center absolute top-[-4rem] max-sm:w-[5rem] max-sm:h-[5rem] max-sm:top-[-2.5rem] md:w-[6rem] md:h-[6rem] md:top-[-3rem]`}
            >
              <img
                src={item.icon}
                width={40}
                className="w-[50%] h-[50%] z-40"
                alt={`${item.title} icon`}
              />
            </div>
            <div>
              <h1 className="pt-10 text-3xl font-bold font-serif flex justify-center text-center sm:pt-16">
                {item.title}
              </h1>
              <p className="pt-8 text-2xl mx-8 font-bold font-serif flex justify-center items-center text-center">
                {item.text}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Service;