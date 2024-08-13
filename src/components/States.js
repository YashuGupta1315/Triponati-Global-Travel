import "./StatesStyle.css";
import { Link } from "react-router-dom";
function States(props) {
  return (
    <>
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className="stickform">
        <h4>{props.strok}</h4>
        <h2>{props.price}</h2>
        <p>{props.formtext}</p>
        <Link to={props.url} className={props.btnClass} target="_top">
          {props.buttonText}
        </Link>
      </div>
      <div className="overview">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
      </div>
      <div className="highlights">
        <h1>{props.head}</h1>
        <ul>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          <li>{props.list4}</li>
          <li>{props.list5}</li>
          <li>{props.list6}</li>
        </ul>
      </div>
    </>
  );
}
export default States;
