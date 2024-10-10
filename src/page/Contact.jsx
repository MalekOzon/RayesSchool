import { imageSlider1 } from "../assets/PhotoIndex"
import ImageHeader from "../component/ImageHeader"
import Photo from "../component/Photo"

const Contact = () => {
  return (
    <div>
      <ImageHeader paragraph=" تواصل معنا"/>
      <Photo url={imageSlider1} />
    </div>
  )
}

export default Contact