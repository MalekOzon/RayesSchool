import ImageHeader from "../component/ImageHeader"
import TeacherComponent from "../component/TeacherComponent"

const Teacher = () => {
  return (
    <div>
      <ImageHeader paragraph=" الأساتذة" src="https://careerteachers.co.uk/wp-content/uploads/2023/12/GettyImages-641755258-scaled-e1701709925156.jpg"/>
      <TeacherComponent />
    </div>
  )
}

export default Teacher