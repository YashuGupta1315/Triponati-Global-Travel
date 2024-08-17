import "./FooterStyle.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Triponati Global Travel</h1>
          <p>We Fulfill Your Adventure Desire</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Our Servises</h4>
          <Link to="/Trips">Trip</Link>
          <Link to="/Trek">Trek</Link>
          <Link to="/Adventure">Adventure</Link>
        </div>
        <div>
          <h4>About Us</h4>
          <a href="/">Our Company</a>
          <a href="/">Privacy Policy </a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>triponati4u@gmail.com</p>
          <p>9503660351</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
