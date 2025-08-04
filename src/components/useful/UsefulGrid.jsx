import React from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

export default function UsefulGrid() {
  return (
    <div className="cards-grid">
      {useful.map((item) => (
        <div key={item.id} className="card-item">
          <div className="card-img-wrap">
            <img src={item.image} alt={item.title} className="card-img" />
          </div>
          <div className="card-info">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-content">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
