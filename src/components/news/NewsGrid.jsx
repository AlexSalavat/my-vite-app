import React from "react";
import { news } from "../../data/news";
import "../../styles/NewsGrid.css";

export default function NewsGrid() {
  return (
    <div className="news-cards-grid">
      {news.map((item) => (
        <div
          key={item.id}
          className={`news-card${item.isPrivate ? " locked" : ""}`}
        >
          <div className="news-card-img-wrap">
            <img src={item.image} alt={item.title} className="news-card-img" />
            {item.isPrivate && (
              <span className="news-card-lock" title="Доступ только по подписке">
                <span role="img" aria-label="locked">🔒</span>
              </span>
            )}
          </div>
          <div className="news-card-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
