import { Link } from "react-router-dom";
import "./InternationalStyle.css";
function InternationData(props) {
  return (
    <div className="I-card">
      <div className="I-image">
        <img src={props.Img} alt={props.Alt} />
      </div>
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <Link href={props.Url} target="_blank">
        {props.visit}
      </Link>
    </div>
  );
}
export default InternationData;
