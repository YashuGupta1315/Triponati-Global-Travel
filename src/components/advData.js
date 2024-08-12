import "./advStyle.css";
function advData(props) {
  return (
    <div className="adv-card">
      <div className="adv-image">
        <img src={props.Img} alt={props.Alt} />
      </div>
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <a href={props.Url} target="_blank">
        {props.visit}
      </a>
    </div>
  );
}
export default advData;
