import "./SkillItem.css";
import { useSpring, animated, config } from "react-spring";

export default function SkillItem({ img, name }) {
  const [rotate, setRotate] = useSpring(() => ({
    config: config.wobbly,
    from: {
      perspective: "0px",
      transform: "translateY(0rem) rotateX(0deg)",
    },
  }));
  return (
    <li
      className="skill"
      onMouseEnter={() =>
        setRotate({
          perspective: "0px",
          transform: "translateY(-0.5rem) rotateX(-30deg)",
        })
      }
      onMouseLeave={() =>
        setRotate({
          perspective: "0px",
          transform: "translateY(0rem) rotateX(0deg)",
        })
      }
    >
      <div className="bullet-point--wrapper">
        <span className="bullet-point"></span>
      </div>
      <animated.img
        style={rotate}
        className="skill__logo"
        src={img}
        alt={`${name} logo`}
      />
      <h4 className="skill__title">{name}</h4>
    </li>
  );
}
