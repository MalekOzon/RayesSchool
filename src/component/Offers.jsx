import { Link } from "react-router-dom"
import { offersInfo } from "../constant"

const Offers = () => {
  return (
    <div
    className="flex max-lg:flex-col"
    >
      <div
      className="
      lg:w-[50%] px-5 
      "
      >
        <h1
        className="text-4xl font-bold py-8"
        >
          أهلا بكم في مدرسة ريّس الرشيدي
        </h1>
        <p
        className="pb-4 text-[#7F7F7F] text-2xl "
        >
          في طريقها، صادفت نسخة من النص.
          كانت النسخة تحذر النص الصغير
          الأعمى من أنه من حيث جاء
          ، سيتم إعادة كتابته ألف مرة
          وكل ما تبقى من أصله سيكون الكلمة.
        </p>
        <p
        className="mb-12 text-[#7F7F7F] text-2xl "
        >
          في طريقها، صادفت نسخة من النص.
          كانت النسخة تحذر النص الصغير
          الأعمى من أنه من حيث جاء
          ، سيتم إعادة كتابته ألف مرة
          وكل ما تبقى من أصله سيكون الكلمة.
        </p>
        <Link
        to="/about"
        className=" p-3 m-9 bg-[#FDA638] text-white 
        rounded-full text-lg "
        >
          اضغط للمزيد
        </Link>
      </div>
      <div
      className="
        lg:w-[50%]  bg-[#b6aaaa43] px-5 
      "
      >
        <h1
        className="text-4xl font-bold py-8"
        >ماذا نوفر ؟</h1>
        <p
        className="pb-4 text-[#7F7F7F] text-2xl "
        >
          في طريقها، صادفت نسخة من النص.
          كانت النسخة تحذر النص الصغير
          الأعمى من أنه من حيث جاء
          ، سيتم إعادة كتابته ألف مرة
          وكل ما تبقى من أصله سيكون الكلمة.
        </p>
        <div
        className="grid grid-cols-2 
        max-sm:grid-cols-1  "
        >
          {
            offersInfo.map((item) => (
              <div
              key={item.id}
              className="flex py-10  ml-4 max-sm:py-6"
              >
                <div
                className="m-3 bg-[#1EAAF1] rounded-full
                w-[140px] h-[70px] flex justify-center
                "
                >
                    <img 
                    src={item.icon}
                    className="w-[70%]"
                    />
                </div>
                <div>
                    <h1
                    className="text-xl font-semibold text-[#4C4C4C] pb-2"
                    >
                      {item.title}
                    </h1>
                    <p
                    className="text-[#7F7F7F] text-lg "
                    >
                      {item.text}
                    </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      
    </div>
    
  )
}

export default Offers