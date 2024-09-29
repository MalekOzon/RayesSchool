import { useParams } from 'react-router-dom'
import Heading from '../component/Heading'

const ActivityDetail = () => {
const para = useParams();
console.log(para)
  return (
    <div>

<Heading first="مدرسون" second="جيدون" paragraph="kas;jk;fashjioahsoighaspgoashoghsaohgoiaaaasahoaishgopashoighasiohga gosah dgoihsagopsahgoishdaioghagoisahghsahiogsaiohgasoihsgadoihagsdiohgasdohigdsahoigasdhoigadshogdashoighhhgahioggds"  />
</div>
  )
}

export default ActivityDetail