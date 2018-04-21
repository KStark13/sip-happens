import React from "react";
import "./WineCard.css";

const WineCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Type:</strong> {props.name}
        </li>
        <li>
          <strong>Flavor:</strong> {props.flavor}
        </li>
        <li>
          <strong>Wine:</strong> {props.wine}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
      </ul>
    </div>
   
  </div>
);

export default WineCard;
