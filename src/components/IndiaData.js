import "./IndiaStyle.css";
function IndiaData(props) {
  return (
    <div className="I-card">
      <div className="I-image">
        <img src={props.Img} alt={props.Alt} />
      </div>
      <h4>{props.header}</h4>
      <a href={props.Url} target="_self">
        {props.visit}
      </a>
    </div>
  );
}
export default IndiaData;
