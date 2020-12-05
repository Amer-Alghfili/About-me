import React from "react";
import "./CertificationItem.css";
import printLogo from "../../../assets/img/printer.svg";

export default function CertificationItem({
  date,
  name,
  major,
  description,
  img,
  syllabusLink,
}) {
  return (
    <article className="certification">
      <p className="certification__date">{date}</p>
      <img className="certification__logo" src={img} alt={`${name} logo`} />
      <h1 className="certification__title">{name}</h1>
      <h2 className="certification__subtitle">{major}</h2>
      <p className="certification__description">
        {description}{" "}
        <a className="certification__syllabus" href={syllabusLink}>
          checkout syllabus from here
        </a>
      </p>
      <a className="certification__print">
        <img className="certification__print-img" src={printLogo} />
        <p>Print certificate</p>
      </a>
    </article>
  );
}
