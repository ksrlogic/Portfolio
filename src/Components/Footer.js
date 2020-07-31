import React from "react";
import Profile from "../images/profile.PNG";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Profile</h1>
        <img src={Profile} />
        <h2>Kim seung rae</h2>
      </div>
      <address>
        TEL: <a href="tel:010-2968-2118">010-2968-2118</a>
        Email: <a href="mailto:ksrlogic@naver.com">ksrlogic@naver.com</a>
        KakaoTalk_ID: <span>ribbone</span>
      </address>
      <div className="footer_info">
        안녕하세요! 김승래입니다.
        <br /> 웹 개발(쇼핑물/스타트업 웹) 외주 받습니다. <br /> 팀 캐스팅도
        받습니다.
        <br /> 리액트, 노드js사용 가능합니다.
      </div>
    </footer>
  );
};

export default Footer;
