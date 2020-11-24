import React from "react";
import CertificationList from "./certificationList/CertificationList";
import ksuImg from "../../assets/img/ksu_masterlogo_white_rgb.svg"
import './index.css'

export default function Certifications() {
  const certifications = [
    {
      date: "2015-2020",
      name: "King Saud University",
      description: "Bachelor Software Engineering (4.02/5)",
      img: ksuImg
    },
    {
      date: "APR 2020",
      name: "Udacity",
      description: "Nanodegree React JS",
      // img: udacityImg
    },
    {
      date: "JAN 2020",
      name: "Udacity",
      description: "Nanodegree Front-end development",
      // img: udacityImg
    },
  ];
  return (
    <section className="certifications">
      <h1 className="certifications__title">Education &amp; Certifications </h1>
      <CertificationList certifications={certifications} />
    </section>
  );
}
