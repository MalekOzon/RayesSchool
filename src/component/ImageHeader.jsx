
import "../index.css";


const ImageHeader = ({paragraph}) => {
  return (
    <div className="relative">
      <div className="HeaderPic">
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          alt="Landscape picture"
          className=" w-full object-cover h-[400px] HeaderPic  "
        />
      </div>

      <div className=" absolute z-10  left-[15%] right-[15%] top-[50%]">
        <p
          className=" text-white text-5xl max-lg:text-3xl lg:font-medium text-center "
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default ImageHeader