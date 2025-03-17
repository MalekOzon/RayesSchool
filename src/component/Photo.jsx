import { useState } from "react";
import { closeIcon } from "../assets/PhotoIndex";
import { photos } from "../constant";
import { useLocation } from "react-router-dom";

const Photo = () => {

  const location = useLocation();
  const currentPathname = location.pathname;


  const [isOpen, setIsOpen] = useState(false); 
  const [image, setImage] = useState(null); 

  const handleImageClick = (url) => {
    setImage(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setImage(null);
  };

  return (
    <div className="w-full relative px-[5%] my-6">
      <div className="w-full grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-1 gap-4">
      {photos.map((item ) => {
        if ( item.id < (currentPathname.includes("/about") ? 100 : 4 ) ) {
        return (
          <div key={item.id} className="w-full h-[18rem] relative  max-sm:py-5 cursor-pointer"
            onClick={() => handleImageClick(item.url)} >
            <img className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75"  src={item.url} alt={`Photo ${item.id}`} />
          </div>  
        )}})}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-50"
            onClick={handleCloseModal} >
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>
          <img className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"  src={image} alt="Full View" />
        </div>
      )}
    </div>
  );
};

export default Photo;