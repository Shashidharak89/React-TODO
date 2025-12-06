import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Test from "./Test/Test"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  )
}
export default App
