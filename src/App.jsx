import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Layout from "./component/Layout"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
