import HomePage from "./assets/pages/HomePage"
import Header from "./assets/components/Header";

import NegoziVoce1 from "./assets/pages/NegoziVoce1"
import NegoziVoce2 from "./assets/pages/NegoziVoce2"
import NegoziVoce3 from "./assets/pages/NegoziVoce3"
import NegoziVoce4 from "./assets/pages/NegoziVoce4"
import NegoziVoce5 from "./assets/pages/NegoziVoce5"

import UfficiVoce1 from "./assets/pages/UfficiVoce1"
import UfficiVoce2 from "./assets/pages/UfficiVoce2"
import UfficiVoce3 from "./assets/pages/UfficiVoce3"
import UfficiVoce4 from "./assets/pages/UfficiVoce4"
import UfficiVoce5 from "./assets/pages/UfficiVoce5"

import EspositoriDisplay from "./assets/pages/EspositoriDisplay"
import GruccePersonalizzate from "./assets/pages/GruccePersonalizzate"
import ManichiniBusti from "./assets/pages/ManichiniBusti"
import Stender from "./assets/pages/Stender"
import VetrineComponibili from "./assets/pages/VetrineComponibili"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./assets/pages/AboutUs";
function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>

      <Route path="/negozi/voce1" element={<NegoziVoce1 />}></Route>
      <Route path="/negozi/voce2" element={<NegoziVoce2 />}></Route>
      <Route path="/negozi/voce3" element={<NegoziVoce3 />}></Route>
      <Route path="/negozi/voce4" element={<NegoziVoce4 />}></Route>
      <Route path="/negozi/voce5" element={<NegoziVoce5 />}></Route>

      <Route path="/uffici/voce1" element={<UfficiVoce1 />}></Route>
      <Route path="/uffici/voce2" element={<UfficiVoce2 />}></Route>
      <Route path="/uffici/voce3" element={<UfficiVoce3 />}></Route>
      <Route path="/uffici/voce4" element={<UfficiVoce4 />}></Route>
      <Route path="/uffici/voce5" element={<UfficiVoce5 />}></Route>

      <Route path="/espositori-display" element={<EspositoriDisplay />}></Route>
      <Route path="/grucce-personalizzate" element={<GruccePersonalizzate />}></Route>
      <Route path="/manichini-busti" element={<ManichiniBusti />}></Route>
      <Route path="/stender" element={<Stender />}></Route>
      <Route path="/vetrine-componibili" element={<VetrineComponibili />}></Route>


    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
