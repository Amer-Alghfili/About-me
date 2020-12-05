import React from "react";
import CertificationItem from "../certificationItem/CertificationItem";
import { certifications } from "../../../util";
import "./CertificationList.css";
import { useSpring, useTransition, animated, config } from "react-spring";
import { useMount } from "../../../hooks/useMount";
export default function CertificationList({ isOpened }) {
  const mountStyles = useMount(certifications, isOpened);
  return (
    <div className="certification-list">
      {mountStyles.map(({ item, props, key }) => {
        const { date, name, major, img, description } = item;
        return (
          <animated.div style={props} key={key}>
            <CertificationItem
              date={date}
              name={name}
              major={major}
              img={img}
              description={description}
            />
          </animated.div>
        );
      })}
    </div>
  );
}
