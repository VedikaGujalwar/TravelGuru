import { Component } from "react";
import "./DestinationStyles.css";
import LakePalace from "../assets/lakepalace.jpeg"
import Udaipur from "../assets/udaipur.jpeg"

class DestinationData extends Component {
  render() {
    return (
    <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="Image1" src={this.props.LakePalace}/>
          <img alt="Image2" src={this.props.Udaipur}/>
        </div>
      </div>

    );
  }
}

export default DestinationData;
