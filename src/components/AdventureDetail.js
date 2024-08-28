import "./TrekDetail.css";

function AdventureDetail(props){
  return(
    <>
        <div className="Overview">
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
        </div>
        <div className="main">
            <div className="container">
                <div className="box">
                    <h3>{props.main1}</h3>
                    <p>{props.Detail1}</p>
                </div>
                <div className="box">
                    <h3>{props.main2}</h3>
                    <p>{props.Detail2}</p>
                </div>
                <div className="box">
                    <h3>{props.main3}</h3>
                    <p>{props.Detail3}</p>
                </div>
                <div className="box">
                    <h3>{props.main4}</h3>
                    <p>{props.Detail4}</p>
                </div>
                <div className="box">
                    <h3>{props.main5}</h3>
                    <p>{props.Detail5}</p>
                </div>
                <div className="box">
                    <h3>{props.main6}</h3>
                    <p>{props.Detail6}</p>
                </div>
            </div>

        </div>
        <div className="highlights">
                <h1>{props.head}</h1>
                <ul>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                    <li>{props.li6}</li>
                </ul>
        </div>
    </>
  );
}
export default AdventureDetail;