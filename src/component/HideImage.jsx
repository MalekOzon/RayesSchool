
const HideImage = () => {
  return (
    <div
      className='
      w-full h-[400px]
      bg-center bg-cover bg-fixed
      flex justify-center items-center 
      max-sm:h-[450px] 
      bg-[url("https://www.americanlycetuffdnk.edu.pk/wp-content/uploads/2023/02/als-dnk.jpg")]
      '
    >

      <div
      className="flex w-[80%] 
      justify-center items-center 
      max-sm:flex-col
      "
      >
        <div
        className=" text-white
        "
        >
          {/* max-sm:backdrop-filter 
        max-sm:backdrop-blur-2xl */}
          <h1
          className="font-bold text-5xl mb-5
          max-sm:text-3xl 
          sm:text-4xl
          "
          >
          تعليم طفلك بعض الأخلاق الحميدة
          </h1>
          <p
          className="text-lg font-semibold w-[90%] 
          max-sm:text-lg 
          max-sm:mb-5 
          
          "
          >
          يتدفق نهر صغير يسمى دودن بالقرب من مكانهم
          ويزودهم بالريجيليا الضرورية.
          إنها بلد فردوسي، حيث تطير أجزاء من الجمل المشوية
          إلى فمك.
          يتدفق نهر صغير يسمى دودن بالقرب من مكانهم
          ويزودهم بالريجيليا الضروري
          
          </p>
        </div>
        <button
        className="rounded-full bg-orange-400 
        p-5 mb-3 w-[330px]  flex justify-center items-center text-xl
        font-bold
        lg:w-[250px]
        xl:w-[200px]
        max-sm:w-[130px]
        "
        >
          خود كورس
        </button>
      </div>
    </div>
  )
}

export default HideImage