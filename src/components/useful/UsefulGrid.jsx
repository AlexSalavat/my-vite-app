import React from "react";
import { useful } from "../../data/useful";
import "./../../styles/NewsList.css";

export default function UsefulGrid() {
  return (
    <>
      <div className="hscroll-wrapper">
        <div className="hscroll-list">
          {useful.map((item) => (
            <div key={item.id} className="hscroll-card">
              <div className="hscroll-card-img-wrap">
                <img src={item.image} alt={item.title} className="hscroll-card-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hscroll-caption-list">
        {useful.map((item) => (
          <div key={item.id} className="hscroll-caption">
            <div className="hscroll-caption-title">{item.title}</div>
            <div className="hscroll-caption-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
