import { Link, Route, Routes } from "react-router-dom"
import './index.css'
import Home from "./components/Home"
import Test from "./Test/Test"

function App() {

  return (
    <div>
      <Link to="/" className="links">Home</Link>
      <Link to="/test" className="links">Test</Link>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  )
}
export default App
