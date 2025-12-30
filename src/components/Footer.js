import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FooterAboutUsElements,
  FooterShopUsElements,
} from "../constants/FooterConstants";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-section1-title">
          <h1>SareeHub</h1>
        </div>
        <p>We’re available by phone +123-456-789</p>
        <p>info@example.com</p>
        <p>Monday till Friday 10 to 6 IST</p>
      </div>
      <div className="footer-section">
        <h1>About Us</h1>
        {FooterAboutUsElements.map((item, index) => (
          <div className="FooterAboutUSItem" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="footer-section">
        <h1>Our Shop</h1>
        {FooterShopUsElements.map((item, index) => (
          <div className="FooterAboutUSItem" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="footer-section">
        <h1>Newsletter</h1>
        <p>
          Receive our weekly newsletter. For dietary content, fashion insider
          and the best offers.
        </p>
        <div className="newsletter-form">
          <input type="text" placeholder="Email address" />
          <button>Join</button>
        </div>
        <div className="social-media-icons">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}
