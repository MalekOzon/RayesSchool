
import "../index.css";


const ImageHeader = ({paragraph , src}) => {
  return (
    <div className="relative">
      <div className="HeaderPic">
        <img src={src} alt=" picture" className=" w-full object-cover h-[400px] HeaderPic  " />
      </div>
      <div className=" absolute z-10  left-[15%] right-[15%] top-[50%]">
        <p className=" text-white text-5xl max-lg:text-3xl lg:font-medium text-center "  > {paragraph} </p>
      </div>
    </div>
  );
};


export default ImageHeader