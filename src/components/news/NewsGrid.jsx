import React from "react";
import { news } from "../../data/news";
import "../../styles/NewsGrid.css"; // Именно отдельный файл!

export default function NewsGrid() {
  return (
    <div className="news-cards-grid">
      {news.map((item) => (
        <div key={item.id} className="news-card">
          <div className="news-card-img-wrap">
            <img src={item.image} alt={item.title} className="news-card-img" />
          </div>
          <div className="news-card-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
