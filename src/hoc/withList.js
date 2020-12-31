import { useMount } from "../hooks/useMount";
import { animated } from "react-spring";
import "../styles/List.css";

export default function withList(WrappedComponent, list, isOpened) {
  return function List(additionalStyle) {
    const mountStyles = useMount(list, isOpened);
    return (
      <div className={`list ${additionalStyle}`}>
        {mountStyles.map(({ item, props, key }) => {
          return (
            <animated.div style={props} key={key}>
              <WrappedComponent {...item} />
            </animated.div>
          );
        })}
      </div>
    );
  };
}
