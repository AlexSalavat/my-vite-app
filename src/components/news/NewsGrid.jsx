import React from "react";
import { news } from "../../data/news";
import "./../../styles/NewsList.css";

export default function NewsGrid() {
  return (
    <div className="cards-grid">
      {news.map((item) => (
        <div
          key={item.id}
          className={`card-item${item.isPrivate ? " locked" : ""}`}
        >
          <div className="card-img-wrap">
            <img src={item.image} alt={item.title} className="card-img" />
            {item.isPrivate && (
              <>
                <div className="card-img-overlay" />
                <span className="card-lock" title="Доступ только по подписке">
                  <span role="img" aria-label="locked">🔒</span>
                </span>
              </>
            )}
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
