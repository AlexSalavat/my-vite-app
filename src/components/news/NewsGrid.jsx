import React from "react";
import { news } from "../../data/news";
import "./../../styles/NewsList.css";

function shortDesc(desc) {
  // 60 символов, без обрезки слова, с точкой в конце
  if (desc.length <= 60) {
    return desc.trim().endsWith('.') ? desc.trim() : desc.trim() + '.';
  }
  let trimmed = desc.slice(0, 57);
  if (trimmed.lastIndexOf(' ') > 35) trimmed = trimmed.slice(0, trimmed.lastIndexOf(' '));
  trimmed = trimmed.trim();
  if (!trimmed.endsWith('.')) trimmed += '.';
  return trimmed;
}

export default function NewsGrid() {
  return (
    <div className="square-cards-grid">
      {news.map((item) => (
        <div key={item.id} className="square-card-outer">
          <div className={`square-card${item.isPrivate ? " locked" : ""}`}>
            <div className="square-card-img-wrap">
              <img src={item.image} alt={item.title} className="square-card-img" />
              {item.isPrivate && (
                <span className="square-card-lock" title="Доступ только по подписке">
                  <span role="img" aria-label="locked">🔒</span>
                </span>
              )}
            </div>
          </div>
          <div className="square-card-text">
            <div className="square-card-title">{item.title}</div>
            <div className="square-card-desc">{shortDesc(item.description)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
