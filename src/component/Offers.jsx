import { Link } from "react-router-dom"
import { offersInfo } from "../constant"

const Offers = () => {
  return (
    <div
    className="flex max-lg:flex-col"
    >
      <div
      className="
      lg:w-[50%] px-5 mb-6
      "
      >
        <h1
        className="text-4xl font-bold py-8"
        >
          أهلا بكم في مدرسة ريّس الرشيدي
        </h1>
        <p
        className="pb-4 mb-7 text-[#7F7F7F] text-2xl "
        >
          مرحبًا بكم في موقع مدرسة ريّس الرشيدي! نحن ملتزمون بتقديم تعليم متميز وشامل لأبنائنا الطلاب في بيئة تحفّز على التعلم والإبداع. نسعى جاهدين لبناء جيل من الشباب الواعي والمثقف القادر على التفاعل بإيجابية مع التحديات المستقبلية. فريقنا المتميز من المعلمين والإداريين يعمل جنبًا إلى جنب لتقديم برامج تعليمية متطورة وأنشطة لامنهجية متنوعة تهدف إلى تنمية مواهب الطلاب وتعزيز مهاراتهم الشخصية والأكاديمية. انضموا إلينا لنرتقي معًا بتعليم أبنائنا نحو آفاق جديدة من النجاح والتميز.

        </p>
        
        <Link
        to="/about"
        className=" p-3 mt-24 mx-9 bg-[#FDA638] text-white 
        rounded-full text-lg mb-11"
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
        >في مدرسة ريّس الرشيدي، نحن ملتزمون بتوفير بيئة تعليمية شاملة تدعم تطوير الطلاب من جميع الجوانب. نقدم مجموعة متنوعة من الخدمات والميزات لتلبية احتياجات كل طالب، ومنها:
        </p>
        <div
        className="grid grid-cols-2 max-sm:grid-cols-1  "
        >
          {
            offersInfo.map((item) => (
              <div
              key={item.id}
              className="flex py-8  ml-4 max-sm:py-6"
              >
                <div
                className="m-3 bg-[#1EAAF1] rounded-full
                w-[200px] h-[70px] flex justify-center
                "
                >
                    <img 
                    src={item.icon}
                    className="w-[75%]"
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