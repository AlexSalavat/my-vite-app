import React from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

function shortDesc(desc) {
  if (desc.length <= 60) {
    return desc.trim().endsWith('.') ? desc.trim() : desc.trim() + '.';
  }
  let trimmed = desc.slice(0, 57);
  if (trimmed.lastIndexOf(' ') > 35) trimmed = trimmed.slice(0, trimmed.lastIndexOf(' '));
  trimmed = trimmed.trim();
  if (!trimmed.endsWith('.')) trimmed += '.';
  return trimmed;
}

export default function UsefulGrid() {
  return (
    <div className="square-cards-grid">
      {useful.map((item) => (
        <div key={item.id} className="square-card-outer">
          <div className="square-card">
            <div className="square-card-img-wrap">
              <img src={item.image} alt={item.title} className="square-card-img" />
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
