import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import slider1 from "../images/slider_1.jpg";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      console.log(`ID ${id}`);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// --------------------------------

const Slider = () => {
  const [left, setLeft] = useState(0);

  const MAX = -300;

  useEffect(() => {
    if (left > 0) {
      setLeft(MAX);
    } else if (left < MAX) {
      setLeft(0);
    }
    console.log(left);
  }, [left, MAX]);

  const leftBtn = () => {
    setLeft(left + 100);
  };
  const rightBtn = () => {
    setLeft(left - 100);
  };
  useInterval(() => {
    setLeft(left - 100);
  }, 5000);
  return (
    <>
      <h1 className="slider_h1" style={{ textAlign: "center" }}>
        Slider Made by React
      </h1>
      <div className="slider_container">
        <StyledSlider left={left} className="slider">
          <img src={slider1} alt="" />
          <img src="images/slider_2.jpg" alt="" />
          <img src="images/slider_3.jpg" alt="" />
          <img src="images/slider_4.jpg" alt="" />
        </StyledSlider>
        <button className="fas fa-chevron-left" onClick={leftBtn}></button>
        <button className="fas fa-chevron-right" onClick={rightBtn}></button>
      </div>
    </>
  );
};

// Slider.propTypes = {
//   left: PropTypes.node.isRequired,
// };
const StyledSlider = styled.div`
  left: ${(props) => props.left}%;
`;
export default Slider;
