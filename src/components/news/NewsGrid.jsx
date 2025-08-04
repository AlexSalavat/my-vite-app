import React from "react";
import { news } from "../../data/news";
import "./../../styles/NewsList.css";

export default function NewsGrid() {
  return (
    <div className="news-grid">
      {news.map((item) => (
        <div
          key={item.id}
          className={`news-card${item.isPrivate ? " locked" : ""}`}
        >
          <div className="news-img-wrap">
            <img src={item.image} alt={item.title} className="news-img" />
            {item.isPrivate && (
              <span className="news-lock" title="Доступ только по подписке">
                <span role="img" aria-label="locked">🔒</span>
              </span>
            )}
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
