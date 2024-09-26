
const HideImage = () => {
  return (
    <div
      className='w-full h-[400px]
      bg-center bg-cover bg-fixed
      flex justify-center items-center
      max-sm:h-[450px]
      bg-[url("https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg")]
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
        p-5 w-[330px]  flex justify-center items-center text-xl
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