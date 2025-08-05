import React, { useState } from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

export default function UsefulGrid() {
  const [expandedId, setExpandedId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="square-cards-grid">
      {useful.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div key={item.id} className="square-card-outer">
            <div className="square-card">
              <div className="square-card-img-wrap">
                <img src={item.image} alt={item.title} className="square-card-img" />
              </div>
            </div>
            <div className={`square-card-text${isExpanded ? " expanded" : ""}`}>
              <div className="square-card-title">{item.title}</div>
              <div className="square-card-desc">{item.description}</div>
              {item.description.length > 72 && !isExpanded && (
                <button className="square-card-readmore" onClick={() => handleReadMore(item.id)}>
                  ещё
                </button>
              )}
              {isExpanded && (
                <button className="square-card-readmore" onClick={() => handleReadMore(item.id)}>
                  скрыть
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
