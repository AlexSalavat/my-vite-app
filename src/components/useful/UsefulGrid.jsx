import React from "react";
import { useful } from "../../data/useful";
import "../../styles/NewsList.css";

export default function UsefulGrid() {
  return (
    <div className="news-cards-grid">
      {useful.map((item, idx) => (
        <div key={item.id || idx} className="news-card-outer">
          <div className="news-card">
            <div className="news-card-img-wrap">
              <img src={item.image} alt={item.title} className="news-card-img" />
            </div>
          </div>
          <div className="news-card-text">
            <div className="news-card-title">{item.title}</div>
            <div className="news-card-desc">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
