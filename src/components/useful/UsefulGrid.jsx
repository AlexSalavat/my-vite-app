import React from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

export default function UsefulGrid() {
  return (
    <div className="news-grid">
      {useful.map((item) => (
        <div key={item.id} className="news-card">
          <div className="news-img-wrap">
            <img src={item.image} alt={item.title} className="news-img" />
          </div>
          <div className="news-info">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-content">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
