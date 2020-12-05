import React, { useState } from "react";
import "./QualificationItem.css";
import { componentMatches, qualifications } from "../../../util";
import arrow from "../../../assets/img/angle-arrow-down.svg";
import { useSpring, animated, config } from "react-spring";
import { useMount } from "../../../hooks/useMount";
import { useMeasure } from "react-use";

export default function QualificationItem({ type, img }) {
  const defaultHeight = "13rem";
  const [ref, { height }] = useMeasure();

  const [isOpened, setIsOpened] = useState(false);
  const [contentHeight, setHeight] = useState(defaultHeight);

  const expand = useSpring({
    config: {
      friction: 20,
    },
    height: isOpened ? `${contentHeight / 16}rem` : defaultHeight,
  });
  const rotate = useSpring({
    config: config.wobbly,
    transform: isOpened ? "rotate(180deg)" : "rotate(0deg)",
  });

  const renderedQualification = componentMatches(type, isOpened);

  React.useEffect(
    function updateHeightFromRef() {
      setHeight(height);
    },
    [height]
  );
  return (
    <li className="qualification" onClick={() => setIsOpened(!isOpened)}>
      <animated.div style={expand} className="qualification__container">
        <div ref={ref}>
          <img className="qualification__img" src={img} />
          <h1 className="qualification__title">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
          {renderedQualification}
        </div>
      </animated.div>
      <animated.img
        className="qualification__arrow"
        src={arrow}
        style={rotate}
      />
    </li>
  );
}
