import React from "react";
import "./Card.scss";

export default function Card({ image, title, type, description }) {
  return (
    <div className="card">
      <img src={image} alt="picture" />
      <h4>{type}</h4>
      <h2>{title}</h2>
      <div className="card-info">
        <b>Niek Bove</b> <span> · April 8, 2018</span> <span> · 3k Views</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
