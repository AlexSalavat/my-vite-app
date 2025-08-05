import React from "react";
import { useful } from "../../data/useful";
import "../../styles/UsefulGrid.css";

export default function UsefulGrid() {
  return (
    <div className="useful-cards-grid">
      {useful.map((item, idx) => (
        <div key={item.id || idx} className="useful-card">
          <div className="useful-card-img-wrap">
            <img src={item.image} alt={item.title} className="useful-card-img" />
          </div>
          <div className="useful-card-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
