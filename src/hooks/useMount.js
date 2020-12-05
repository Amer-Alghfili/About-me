import React from "react";
import { useTransition, config } from "react-spring";

export function useMount(items, isOpened) {
  const mount = useTransition(isOpened ? items : [], (item, ind) => ind, {
    from: {
      opacity: 0,
      transform: "translateY(-5rem)",
    },
    enter: { opacity: 1, transform: "translateY(0rem)" },
    leave: { opacity: 0, transform: "translateY(-5rem)" },
  });

  return mount;
}
