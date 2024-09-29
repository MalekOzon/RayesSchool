import { activity } from "../constant"

const Activity = () => {
  return (
    <div
    className="
    w-full 
    "
    >
      <div
      className="
      flex justify-center items-center md:mx-[7.5%] h-full 
      max-lg:flex-col
      "
      >
        {activity.map((item) => (
          <div
          className="
        bg-[#FAFAFA] h-full
          my-5 lg:mx-5
          max-md:w-full
          "
          key={item.id}
          >
            <div
            className="relative
            h-[65%] max-md:w-full
            "
            >
              <img 
              className="
              h-full w-full
              "
              src={item.img}
                />
                <div
                className="absolute w-[45px]
                bottom-0 left-0 bg-purple-500 text-white 
                "
                >
                  <span
                  className="
                  flex justify-center items-center
                  text-2xl font-semibold
                  "
                  >
                    {item.datenum}
                  </span>
                  <span
                  className="
                  flex justify-center items-center
                  text-lg font-semibold text-center
                  "
                  >
                    {item.dateyear}
                  </span>
                </div>
            </div>
            <h3
            className="
            md:mr-6
            m-2 my-5 text-2xl font-serif font-semibold
            "
            >
              {item.title}
            </h3>
            <p
            className="px-6 text-lg pb-8"
            >
              {item.text}
            </p>
            <button
            className="rounded-full bg-orange-400 text-white
            p-4 mr-3  w-[200px]  flex justify-center items-center text-xl
            font-bold mb-5
            lg:w-[170px]
            xl:w-[150px]
            max-sm:w-[150px]
            "
            >
            اقرأ المزيد</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity