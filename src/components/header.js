import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
  
  } from "@fortawesome/free-brands-svg-icons"; 
  import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope,faPhone, faKey, faMapMarkerAlt, faAngleDoubleRight, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import Logo from "./img/CA-Logo.png";
import Email from "./img/email.png";
import Time from "./img/time.png";
import {Link} from "react-router-dom";
library.add(faEnvelope,faPhone,faMapMarkerAlt, faAngleDoubleRight,faAngleRight, faKey);

export default function Header(){
    return(
        <>
        <header>
  <div className="headertop">
   <div className="left">  
   <p  className="mobileleft">
   <FontAwesomeIcon className="mailicon"
    icon="envelope"
  /> 
      <span >  cavishnupareek@gmail.com</span> </p>
      <p className="mobileright"><FontAwesomeIcon className="phoneicon"
    icon="phone"
  />  <span>+91-9887629613</span></p> </div> <div className="right">Connect With Us <a href="https://www.youtube.com" target="_blank"
  className="social">
  <FontAwesomeIcon icon={faYoutube} size="1x" />
</a>
<a href="https://www.facebook.com"
  className="social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
<a href="https://www.twitter.com" className="social">
  <FontAwesomeIcon icon={faTwitter} size="1x" />
</a>
<a href="https://www.instagram.com"
  className="social">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a></div>

  </div>
  <div className="headermid">
  <div className="headermidleft">
<img src={Logo} alt="" className="logo" /> 
</div> 

<div className="headermidright">
<div className="midright" >
  <div> <img src={Time} alt="" className="icons" /></div>
  <div className="icontext">
    <p className="iconheading">Contact Time</p>
    <p>Mon-Sat: 09.00 - 07.00
</p>
  </div>
  <div> <img src={Email} alt="" className="icons" /> </div>
  <div className="icontext" >
    <p className="iconheading">Contact Email</p>
    <p>cavishnupareek@gmail.com</p>
  </div>
</div>
</div>

</div>

<div className="navbar">
<ul>
<Link to='/' className="menubar"><li> Home </li></Link>
<Link to="/service" className="menubar"><li> Service Offered </li></Link>
  <Link to='/about'className="menubar"><li> About Us </li></Link>
<Link to="/contact" className="menubar"><li>Contact Us</li></Link>
</ul>
</div>

</header>
</>
    );
};