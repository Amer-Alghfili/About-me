import React from "react";
import "./QualificationList.css";
import QualificationItem from "../qualificationItem/QualificationItem";

export default function QualificationList({ qualifications }) {
  const renderedList = qualifications.map(({ type, img }, indx) => {
    return <QualificationItem key={indx} type={type} img={img} />;
  });

  return <ul className="qualification-list">{renderedList}</ul>;
}
