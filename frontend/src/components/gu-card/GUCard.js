import React from "react";
import "./gucard.css";

export default function GUCard({ imgUrl, name, quantity }) {
  return (
    <div className="card-card">
      <img className="card-img" src={imgUrl} alt={name} />
      <div className="card-info">
        <p>{name}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
