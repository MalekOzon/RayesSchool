
const HideImage = () => {
  return (
    <div className=' w-full h-[400px] bg-center bg-cover bg-fixed flex justify-center items-center  max-sm:h-[450px] 
      bg-[url("https://www.americanlycetuffdnk.edu.pk/wp-content/uploads/2023/02/als-dnk.jpg")] ' >
      <div className="flex w-[80%]  justify-center items-center  max-sm:flex-col " >
        <div className=" text-white " >
          <h1 className="font-bold text-5xl mb-5 max-sm:text-3xl  sm:text-4xl " > تعليم طفلك بعض الأخلاق الحميدة </h1>
          <p className="text-xl font-semibold w-[90%]  max-sm:text-lg  max-sm:mb-5 ">
            يبدأ بترسيخ قيم كالصدق، الاحترام، والتسامح في حياته اليومية. كن قدوة حسنة له، فتصرفاتك تلعب دورًا كبيرًا في تشكيل شخصيته وسلوكه المستقبلي.
          </p>
        </div>
        <button className="rounded-full bg-orange-400  p-5 mb-3 w-[330px]  flex justify-center items-center text-xl font-bold lg:w-[250px] xl:w-[200px] max-sm:w-[130px] " >
          اشترك بمنهاج  
        </button>
      </div>
    </div>
  )
}

export default HideImage