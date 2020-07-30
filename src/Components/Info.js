import React from "react";

const Info = () => {
  return (
    <div className="info_name">
      <h1>Kim Seung Rae</h1>
      <h2>who loves JS</h2>
      <p>
        Full Stack Developer
        <br /> Using NodeJS, ReactJS.
      </p>
    </div>
  );
};

export default Info;

const MainInfo = () => {
  return (
    <section className="my_info">
      <p>
        안녕하세요! <br /> <br />
        저는 자바스크립트 개발자 김승래입니다! <br /> <br />
        React와 NodeJS를 사용하여 <br /> <br />
        웹 개발을 하고있습니다. <br /> <br />
        풀스택 개발자, <br /> <br />
        그리고 IT 교육인이라는 꿈을 가지고 <br /> <br />
        열심히 달려나가는 한 청년입니다.
      </p>
      <ul>
        <li>
          <img
            className="info_jpgs info_jpg1"
            src="/images/hello.png"
            alt="hello"
          />
        </li>
        <li>
          <img
            className="info_jpgs info_jpg2"
            src="/images/computer.png"
            alt="computer"
          />
        </li>
        <li>
          <img
            className="info_jpgs info_jpg3"
            src="/images/school.png"
            alt="school"
          />
        </li>
      </ul>
    </section>
  );
};

export { MainInfo, Info };
