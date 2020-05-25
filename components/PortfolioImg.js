import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./portfolio-pic.module.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 2) / 50,
  1.3,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PortfolioImg = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className={styles.portfolioPic}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
};

export default PortfolioImg;
