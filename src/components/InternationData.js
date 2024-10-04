import "./InternationalStyle.css";
function InternationData(props) {
  return (
    <div className="I-card">
      <div className="I-image">
        <img src={props.Img} alt={props.Alt} />
      </div>
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <a href={props.Url} >
        {props.visit}
      </a>
    </div>
  );
}
export default InternationData;
