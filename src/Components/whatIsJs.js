import React from "react";
import JavaScriptImage from "../images/JavaScript.png";

const whatIsJs = () => {
  return (
    <div className="desc_js">
      <h1>자바스크립트란 무엇인가요?</h1>
      <h2>What is JavaScript?</h2>
      <div>
        <p>
          자바스크립트(JavaScript)는 객체(object) 기반의 스크립트 언어입니다.
          <br />
          HTML로는 웹의 내용을 작성하고, CSS로는 웹을 디자인하며,
          자바스크립트로는
          <br />
          웹의 동작을 구현할 수 있습니다. 자바스크립트는 주로 웹 브라우저에서
          <br />
          사용되나, Node.js와 같은 프레임워크를 사용하면 서버 측
          프로그래밍에서도
          <br />
          사용할 수 있습니다. 현재 컴퓨터나 스마트폰 등에 포함된 대부분의 웹
          <br />
          브라우저에는 자바스크립트 인터프리터가 내장되어 있습니다.
        </p>
        <img src={JavaScriptImage} alt="JavaScript" />
      </div>
    </div>
  );
};

export default whatIsJs;
