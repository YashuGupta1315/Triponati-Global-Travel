import "./StatesStyle.css";

function States(props) {
  return (
    <>
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="overview">
          <i className={props.icon}></i>
          <p>{props.para}</p>

          <i className={props.icon1}></i>
          <p>{props.para1}</p>
        </div>
      </div>
    </>
  );
}
export default States;
