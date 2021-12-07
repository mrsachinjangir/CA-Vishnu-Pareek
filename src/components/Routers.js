import React from "react";
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";
 import App from "../App";
 import About from "./about";
import Footer from "./footer";
import Header from "./header";
import Contact from "./Contact";
import ServiceOffered from "./Service Offered";
function Routers(){
    return(
<>
<Router>
<Header/>
<Routes>

<Route path="/" exact element={<App/>} />
<Route path="/about" element={<About/>} />
<Route path="/service" element={<ServiceOffered/>} />
<Route path="/contact" element={<Contact/>} />

</Routes>
<Footer/>
</Router>
</>
    );
};
export default Routers;