import React from "react";
import "./CertificationItem.css";

export default function CertificationItem({ date, name, description, img }) {
  const itemStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${img})`,
  };
  return (
    <article className="certification" style={itemStyle}>
      <span className="certification__date">{date}</span>
      <h1 className="certification__title">{name}</h1>
      <p className="certification__description">{description}</p>
    </article>
  );
}
