import React, { useState } from "react";
import "./QualificationItem.css";
import Certifications from "../../certifications/index";
import { componentMatches, qualifications } from "../../../util";
import arrow from "../../../assets/img/angle-arrow-down.svg";
import upArrow from "../../../assets/img/upload.svg";

export default function QualificationItem({ type, img }) {
  const [isOpened, setIsOpened] = useState(false);
  function openQualification() {
    setIsOpened(!isOpened);
  }
  let component;
  if (isOpened) {
    component = componentMatches(type);
  }
  return (
    <li className="qualification" onClick={openQualification}>
      <img className="qualification__img" src={img} />
      <h1 className="qualification__title">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h1>
      <img className="qualification__arrow" src={arrow} />
      {component}
    </li>
  );
}
