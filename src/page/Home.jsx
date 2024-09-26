import HideImage from "../component/HideImage"
import Offers from "../component/Offers"
import Service from "../component/Service"
import Slider from "../component/Slider"


const Home = () => {
  return (
    <div
    >
      <Slider />
      <Service />
      <Offers />
      <HideImage />
      <Service />
    </div>
  )
}

export default Home