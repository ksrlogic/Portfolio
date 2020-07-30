import React from "react";

const Card = ({ title, imgsrc }) => {
  return (
    <>
      <div className="Card">
        <div className="imgBx">
          <img src={imgsrc} alt="" />
        </div>
        <div className="CardContent">
          <h2>{title}</h2>
          <p>
            Ea consectetur voluptate proident nulla proident incididunt non. Do
            ex ut est aute consequat Lorem voluptate. Eiusmod fugiat incididunt
            nisi irure duis labore elit anim velit enim. Reprehenderit ea duis
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
