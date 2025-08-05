import React from "react";
import { news } from "../../data/news";
import "./../../styles/NewsList.css";

export default function NewsGrid() {
  return (
    <>
      <div className="hscroll-wrapper">
        <div className="hscroll-list">
          {news.map((item) => (
            <div
              key={item.id}
              className={`hscroll-card${item.isPrivate ? " locked" : ""}`}
            >
              <div className="hscroll-card-img-wrap">
                <img src={item.image} alt={item.title} className="hscroll-card-img" />
                {item.isPrivate && (
                  <span className="hscroll-card-lock" title="Доступ только по подписке">
                    <span role="img" aria-label="locked">🔒</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hscroll-caption-list">
        {news.map((item) => (
          <div key={item.id} className="hscroll-caption">
            <div className="hscroll-caption-title">{item.title}</div>
            <div className="hscroll-caption-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
