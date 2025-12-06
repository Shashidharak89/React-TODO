import { Link, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Test from "./Test/Test"

function App() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  )
}
export default App
