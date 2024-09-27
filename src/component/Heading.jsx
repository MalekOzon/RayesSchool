
const Heading = ({first ,second, paragraph,className}) => {
  return (
    <div
    className="
    w-full flex flex-col justify-center items-center
    my-16 max-lg:my-14  
    "
    >
      <div
      className="my-8"
      >
        <span
        className="text-[#5D50C6] font-bold text-5xl
        max-sm:text-4xl 
        "
        >{first} </span>
        <span
        className="text-[#FDA638] font-bold text-5xl
        max-sm:text-4xl 
        "
        >{second}</span>
      </div>
      <p
      className={`text-[#7F7F7F] text-xl w-[70%]
      text-center ${className}
      `}
      >{ paragraph}</p>
    </div>
  )
}

export default Heading