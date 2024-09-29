
const Quote = () => {
  return (
    <div
    className='
      w-full h-[500px]
      bg-center bg-cover bg-fixed
      max-sm:h-[550px] 
      bg-[url("https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg")]
      '
    >
      <div
      className=" bg-[#1EAAF1] w-[40%]
      flex flex-col h-full 
      max-lg:w-full lg:mr-[9%]
      "
      >
        <div
        className="h-[40%] flex flex-col items-center mt-5"
        >
        <h1
        className="font-bold text-4xl text-white "
        >طلب عرض </h1>
        <p
        className="font-semibold text-lg 
        mt-5 w-[80%] text-center text-white
        "
        >بعيدًا جدًا، خلف جبال الكلمات، بعيدًا عن بلدان 
        و ل الكلماتasdsad، بعيدًا عن بلدان 
        و   تعيش النصوص العمياء.</p>
        </div>
        <form
        className="mx-[5%]"
        >
          <input 
          className="m-2 p-1" type="text"
          name="text" placeholder="الاسم الاول" />
          <input 
          className="m-2 p-1" type="text"
          name="text" placeholder="الاسم الاخير" />
          <input 
          className="m-2 p-1" type="tel"
          name="phone" placeholder=" 987 654 321" />
          <br />
          <input 
          className="m-2 mb-4 p-2 w-full h-[4rem]" type="text"
          name="phone" placeholder="اكتب هنا" />
          <button
        className="rounded-full bg-orange-400 
         p-3 mb-4 w-[330px]  flex justify-center items-center
         text-xl text-center text-nowrap
        font-bold
        lg:w-[150px]
        xl:w-[100px]
        max-sm:w-[130px]
        "
        >أرسل</button>
        </form>
      </div>
    </div>
  )
}

export default Quote