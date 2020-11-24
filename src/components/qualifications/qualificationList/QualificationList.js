import React from "react";
import "./QualificationList.css";
import { qualifications } from "../../../util";
import QualificationItem from "../qualificationItem/QualificationItem";

export default function QualificationList({ qualifications }) {
  console.log(qualifications);
  const renderedList = qualifications.map(({ type, img }, indx) => {
    return <QualificationItem key={indx} type={type} img={img} />;
  });

  return <ul className="qualification-list">{renderedList}</ul>;
}
