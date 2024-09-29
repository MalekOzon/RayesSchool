import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Teacher from "./page/Teacher"
import Blog from "./page/Blog"
import Layout from "./component/Layout"
import ActivityDetail from "./page/ActivityDetail"

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<ActivityDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
