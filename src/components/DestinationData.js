import { Component } from "react";
import "./DestinationStyle.css";
import { Link } from "react-router-dom"; // Import Link

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className="first-des">
          <div className="des-text">s
            <h2>{this.props.heading1}</h2>
            <p>{this.props.text1}</p>
            {/* Use Link component for navigation */}
            <Link to={this.props.url} className="btnExplore">
              {" "}
              {this.props.Explore}
            </Link>
          </div>
          <div className="image">
            <img
              alt="india"
              src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_960/https://www.india-tours.com/blog/wp-content/uploads/2020/09/explore-in-India1.jpg"
            />
            <img
              alt="india"
              src="https://indianlifestyle2.home.blog/wp-content/uploads/2018/09/u9rl1.jpg?w=1024&h=683"
            />
          </div>
        </div>
        <div className="sec-des">
          <div className="sec-text">
            <h2>{this.props.heading2}</h2>
            <p>{this.props.text2}</p>
            {/* Use Link component for navigation */}
            <Link to="/India" className="btnExplore">
              Explore..
            </Link>
          </div>
          <div className="Secimage">
            <img
              alt="international"
              src="https://www.holidayrepresentations.com/blog/wp-content/uploads/2018/03/multiple-places-around-the-world.jpg"
            />
            <img
              alt="international"
              src="https://i.pinimg.com/originals/6a/74/30/6a7430931b15de50b7155ec73a31f953.jpg"
            />
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;
