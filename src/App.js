import "./App.css";
import Slider from "./components/slider";
import Img from "./img/hm-about.jpg";
import Icon1 from "./img/business-icon.png";
import Icon2 from "./img/tax-reg-icon.png";
import Icon3 from "./img/gst-icon.png";
import Icon4 from "./img/intellectual-icon.png";
import Icon5 from "./img/advisory-icon.png";
import Icon6 from "./img/foreign-direct-investment-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        
        <Slider />
      </div>
      <section>
        <div className="abouts">
          <div className="aboutimg">
            <img src={Img} alt="" id="img" />
          </div>
          <div className="aboutinto">
            <div className="aboutheading">
              <h2>Welcome to CA Vishnu Pareek & Co </h2>
            </div>
            <div className="aboutsub">
              <p>
                <span>CA Vishnu Pareek & Co</span> was established in the year
                2019 with the core objective of providing professional expertise
                to its esteemed clients. The firm has come a long way in
                imparting knowledge and assistance to its clients. The firm
                effectively uses its vast experience and competence for the
                benefit of its clients. Further the firm is managed by a core
                team of professionals comprising of eminent Chartered
                Accountants, Direct & Indirect Tax Practitioners and Advocates.
                The firm is highly efficient to provide Tax Consultancy on both
                Direct and Indirect Taxes. The clients of the firm interalia
                include PSU’s, Five Star Hotels, famous corporate Houses and
                highly notable professionals.
              </p>
              <p>
                Over a period of approximately One decades, the firm has grown
                exponentially and admired as name of trust and excellence in
                service delivery through value addition and client focus. The
                updated and in-depth knowledge in Indirect Taxation coupled with
                extensive experience of various industries has provided the firm
                a niche position.
              </p>

              <Link to='/about' className="readmorebtn">
                Read More{" "}
                <i>
                  <FontAwesomeIcon icon="angle-double-right" />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div>
          {" "}
          <h2>
            Our Services <span>Offerings</span>{" "}
          </h2>{" "}
        </div>
        <div className="divflex">
          <div className="services">
            <img src={Icon1} alt="" />
            <h5>Start my Business</h5>
            <p>
              Considering registering company in India and that too in a fast
              and hassle-free
            </p>
          </div>
          <div className="services">
            {" "}
            <img src={Icon2} alt="" />
            <h5>Business and Tax Registration</h5>
            <p>
              In the era of globalization entrepreneurship is the need of the
            </p>
          </div>
          <div className="services">
            {" "}
            <img src={Icon3} alt="" />
            <h5>GST</h5>{" "}
            <p>GST is a huge tax reform in India post-Independence</p>
          </div>
          <div className="services">
            {" "}
            <img src={Icon4} alt="" />
            <h5>Intellectual Property Rights</h5>{" "}
            <p>
              A trademark is typically a name, word, phrase, logo, symbol,
              design, image
            </p>
          </div>
          <div className="services">
            {" "}
            <img src={Icon5} alt="" />
            <h5>Startup Advisory</h5>{" "}
            <p>
              Foreign investment in India is primarily regulated by the FDI
              policy
            </p>
          </div>
          <div className="services">
            {" "}
            <img src={Icon6} alt="" />
            <h5>Foreign Investment in India</h5>{" "}
            <p>GST is a huge tax reform in India post-Independence</p>
          </div>
        </div>
      </section>
     
      
      
    </>
  );
}

export default App;
