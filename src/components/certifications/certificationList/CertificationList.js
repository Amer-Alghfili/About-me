import React from "react";
import CertificationItem from "../certificationItem/CertificationItem";
import './CertificationList.css'

export default function CertificationList({ certifications }) {
  const renderedCertifications = certifications.map(
    ({ date, name, description, img }, ind) => (
      <CertificationItem
        key={ind}
        date={date}
        name={name}
        description={description}
        img={img}
      />
    )
  );
  return <div className="certification-list">{renderedCertifications}</div>;
}
