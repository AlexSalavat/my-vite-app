import React from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

export default function UsefulGrid() {
  return (
    <div className="square-cards-grid">
      {useful.map((item) => (
        <div key={item.id} className="square-card">
          <div className="square-card-img-wrap">
            <img src={item.image} alt={item.title} className="square-card-img" />
          </div>
          <div className="square-card-info">
            <div className="square-card-title">{item.title}</div>
            <div className="square-card-desc">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
