import { useParams } from 'react-router-dom'
import ImageHeader from '../component/ImageHeader';

const ActivityDetail = () => {
const para = useParams();
console.log(para)
  return (
    <div>
      <ImageHeader paragraph={`هنا النشاط رقم ${para.id}`}/>
      <h1>هنا النشاط رقم {para.id}</h1>
</div>
  )
}

export default ActivityDetail