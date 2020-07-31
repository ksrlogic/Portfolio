import React from "react";
import image from "../images/girl_in_bluejeans.jpg";
const _3D = () => {
  return (
    <div id="contact" className="contact_me">
      <h1>
        <p>Wanna Contact Me?</p>
        <p>Click This! --&gt;</p>
      </h1>
      <div className="imageContainer">
        <img src={image} alt="profile" />
      </div>
    </div>
  );
};

export default _3D;
