import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footermaindiv">
          <div className="row">
            <div className="footerdiv">
              <h3>Quik Links</h3>
              <ul>
              <Link to="/" className="menubar">  <li> <i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Home</li> </Link>
              <Link to='/about'className="menubar">   <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>About Us</li></Link>
              <Link to="/contact" className="menubar"> <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Contact Us</li></Link>
              <Link to="/service" className="menubar"> <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Service Offered</li></Link>
              </ul>
            </div>
            <div className="footerdiv">
              <h3>Services</h3>
              <ul>
                <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Finance and Accounts Outsourcing </li>
                <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Audit and Assurance</li>
                <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>Consulting</li>
                <li><i><FontAwesomeIcon icon="angle-right" className="mailicon" id="angleicon" /></i>PAN India Compliance Administration</li>
              </ul>
            </div>
            <div className="footerdiv">
              <h3>Services</h3>
              <input
                type="text"
                placeholder="Enter email address"
                className="inputbox"
              />{" "}
              <br />
              <input type="submit" value="Subscribe" className="btn" />
            </div>
            <div className="footerdiv">
              <h3>Connect With Us</h3>
              <ul>
              <a href="https://goo.gl/maps/DzknrzdaXhzL7fZx5" className="menubar" target="_blank" rel="noopener noreferrer" > <li>
                 <i><FontAwesomeIcon className="mailicon" id="footericon" icon="map-marker-alt" /></i>
                 <span>Near Sunil Book Depot,
                  <br /> Mandawa Mod,Jhunjhunu(Raj.) 333001</span> 
                </li></a>
                <li>
                  
                  <FontAwesomeIcon className="phoneicon" id="footericon" icon="phone" />
                  +91-9887629613
                </li>
                <li>
                  <FontAwesomeIcon className="mailicon" id="footericon" icon="envelope" />
                  cavishnupareek@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerend">
          Designed & Developed by :{" "}
          <a href="https://linktr.ee/mrsachinjangir" >Mr Sachin Jangir</a>
        </div>
      </footer>
    </>
  );
}
