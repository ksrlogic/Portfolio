import React from "react";
import html from "../images/skills/html5.png";
import css from "../images/skills/css.png";
import JavaScript from "../images/skills/JavaScript.png";
import NodeJs from "../images/skills/nodejs.png";
import SQL from "../images/skills/sql.png";
import Reactimage from "../images/skills/React.png";
const whatCanIUse = () => {
  return (
    <div className="skill_container">
      <h1>My Skills</h1>
      <div>
        <h2>HTML5</h2>
        <img src={html} alt="HTML" />
      </div>
      <div>
        <h2>CSS3</h2>
        <img src={css} alt="CSS" />
      </div>
      <div>
        <h2>JavaScript</h2>
        <img src={JavaScript} alt="JavaScript" />
      </div>
      <div>
        <h2>NodeJs</h2>
        <img src={NodeJs} alt="NodeJs" />
      </div>
      <div>
        <h2>SQL</h2>
        <img src={SQL} alt="SQL" />
      </div>
      <div>
        <h2>React</h2>
        <img src={Reactimage} alt="React" />
      </div>
    </div>
  );
};

export default whatCanIUse;
