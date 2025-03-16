
const Quote = () => {
  return (
    <div className=' mt-28 w-full h-[500px] lg:h-[650px]  bg-cover bg-fixed  max-lg:h-[650px]
      bg-[url("https://www.americanlycetuffdnk.edu.pk/wp-content/uploads/2023/02/als-dnk.jpg")] ' >
      <div  className="inset-0 bg-opacity-85  bg-[#1EAAF1] w-[40%]  flex flex-col h-full   max-lg:w-full lg:mr-[9%] " >
        <div className="h-[30%] flex flex-col items-center mt-5">
          <h1 className="font-bold text-4xl text-white " > تواصل معنا </h1>
          <p className="font-semibold text-lg mt-5 w-[80%] text-center text-white">تواصل معنا ليكون جسرًا نحو إجاباتك وحلول أسئلتك، نحن هنا لنساعدك بكل حماس واهتمام. لا تتردد في مشاركة أفكارك أو استفساراتك، فرضاكم هو هدفنا دائمًا لتحسين تجربتكم معنا. </p>
        </div>
        <form className="mx-[13%] max-md:w-[300px] max-md:mt-3 flex flex-col" >
          <input className="p-2 m-2 max-md:w-[80%] rounded-md border border-blue-400 focus:border-orange-600 focus:outline-none transition duration-300" type="text"  name="text"  placeholder="الاسم الاول" />
          <input className="p-2 m-2 max-md:w-[80%] rounded-md border border-blue-400 focus:border-orange-600 focus:outline-none transition duration-300" type="text"  name="text"  placeholder="الاسم الاخير" />
          <input className="p-2 m-2 max-md:w-[80%] rounded-md border border-blue-400 focus:border-orange-600 focus:outline-none transition duration-300" type="tel"   name="phone" placeholder=" 987 654 321" />
          <input className="p-2 m-2 max-md:w-[80%] rounded-md border border-blue-400 focus:border-orange-600 focus:outline-none transition duration-300" type="text"  name="phone" placeholder=" الصف" />
          <br />
          <input  className="p-2 m-2 w-[90%] rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300  h-24" type="text"  name="phone" placeholder="اكتب هنا" />

          <button  type="submit" className="rounded-full bg-orange-400 hover:bg-orange-500 text-white p-3 mb-4 w-[130px]  flex justify-center items-center
          text-xl text-center text-nowrap  font-semibold  lg:w-[150px]  xl:w-[100px] max-sm:w-[130px] transition duration-300" >ارسال</button>

        </form>
      </div>
    </div>
  )
}

export default Quote