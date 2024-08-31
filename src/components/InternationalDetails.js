import "./TrekDetail.css";
function InternationalDetails(props){
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
                        <i className={props.Tclass}></i>
                        <p>{props.Transfer}</p>
                        <p>{props.TransDetail}</p>
                </div>
                <div className="box">
                        <i className={props.Stayclass}></i>
                        <p>{props.Stay}</p>
                        <p>{props.StayDetail}</p>
                </div>
                <div className="box">
                        <i className={props.Mealclass}></i>
                        <p>{props.Meal}</p>
                        <p>{props.MealDetail}</p>
                </div>
                <div className="box">
                        <i className={props.Sightseeingclass}></i>
                        <p>{props.Sightseeing}</p>
                        <p>{props.SightseeingDetail}</p>
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
                </ul>
            </div>
            <div className="iternary">
                <h1>{props.Itinerary }</h1>
            </div>
        </>
    );
}
export default InternationalDetails;