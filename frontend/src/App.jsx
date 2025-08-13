import HomePage from "./assets/pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./assets/pages/AboutUs";
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Homepage" element={<HomePage />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
    </Routes>
    </BrowserRouter>
     <HomePage />
    </>
  )
}

export default App
