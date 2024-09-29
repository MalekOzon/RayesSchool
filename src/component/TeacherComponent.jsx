import { teacherInfo } from "../constant"


const Teacher = () => {
  return (

    <div
    className="grid grid-cols-4
    max-lg:grid-cols-2
    max-sm:grid-cols-1
      mx-[8%] 
    "
    >
      {
        teacherInfo.map((item) => {
          if (item.id <= 4 ) {
            return (
              <div
                key={item.name}
                className="relative
              m-3 mt-0 p-4  rounded-3xl
              hover:shadow-2xl
              "
              >
                <img 
                className="w-full h-[275px] rounded-3xl
                max-sm:h-[250px]
                "
                src={item.img}
                />
                <div
                className="flex flex-col 
                justify-center items-center
                mt-4"
                >
                  <h1
                  className="text-2xl font-semibold "
                  >
                  {item.name}
                  </h1>
                  <p
                  className="text-[#a5a4a4] text-lg my-3"
                  >
                  {item.pos}
                  </p>
                  <p
                  className="text-[#7F7F7F] text-center"
                  >
                  {item.text}
                  </p>
                </div>
              </div>
            )
          }
        })
      }
  </div>
  )
}

export default Teacher