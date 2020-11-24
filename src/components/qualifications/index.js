import React from "react";
import { qualifications } from "../../util";
import QualificationList from "./qualificationList/QualificationList";
import "./index.css";

export default function Qualifications() {
  return (
    <section className="qualifications">
      <QualificationList qualifications={qualifications} />
    </section>
  );
}
