import "./HeroStyles.css";
import { Link } from "react-router-dom";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="triponati" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass} target="_top">
            {props.buttonText}
          </Link>
          {/* <Link to="/International" className="btnExplore">
              Explore..
            </Link> */}
        </div>
      </div>
    </>
  );
}
export default Hero;
