import "./TrekStyle.css";
function TrekData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt={props.alt} />
      </div>
      <h4>{props.heading}</h4>
      <a href={props.url} target="_blank">
        {props.See}
      </a>
    </div>
  );
}
export default TrekData;
