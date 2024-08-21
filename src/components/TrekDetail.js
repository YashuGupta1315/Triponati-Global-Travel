import "./TrekDetail.css";
function TrekDetail(props){
    return(
        <>
            <div className="Overview">
                <h1>{props.heading}</h1>
                <h4>{props.over}</h4>
                <p>{props.para}</p>
            </div>
            <div className="main">
               <div className="container">
               <div className="box">
                    <i className={props.Rclass}></i>
                    <p>{props.region}</p>
                    <p>{props.regionDetail}</p>
                </div>
                <div className="box">
                    <i className={props.Dclass}></i>
                    <p>{props.duration}</p>
                    <p>{props.days}</p>
                </div>
                <div className="box">
                    <i className={props.Gclass}></i>
                    <p>{props.grade}</p>
                    <p>{props.gradeDetail}</p>
                </div>
                <div className="box">
                    <i className={props.Tclass}></i>
                    <p>{props.transport}</p>
                    <p>{props.transDetail}</p>
                </div>
                <div className="box">
                    <i className={props.Aclass}></i>
                    <p>{props.activity}</p>
                    <p>{props.activityDetail}</p>
                </div>
                <div className="box">
                    <i className={props.Mclass}></i>
                    <p>{props.altitude}</p>
                    <p>{props.altitudeDetail}</p>
                </div>
                <div className="box">
                    <i className={props.Bclass}></i>
                    <p>{props.season}</p>
                    <p>{props.month}</p>
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
export default TrekDetail;