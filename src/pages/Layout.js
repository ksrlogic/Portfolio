import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainInfo, Info } from "../Components/Info";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import WhatIsJs from "../Components/whatIsJs";
import _3DComponent from "../Components/_3D";
// Imgaes
import image1 from "../images/slider_1.jpg";
import image2 from "../images/slider_2.jpg";
import image3 from "../images/slider_3.jpg";
const LayOut = () => {
  return (
    <>
      <Container>
        <Row id="home">
          <Col className="header">
            <img src="images/Programmers.jpg" alt="" />
            <div className="header_box">
              <h1>Do you wanna fly?</h1>
            </div>
          </Col>
        </Row>
        <Row id="about" className="info">
          <Col className="border-right" md={4}>
            <Info />
          </Col>
          <Col className="myname" md={8}>
            <MainInfo />
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <WhatIsJs />
          </Col>
        </Row>
        <Slider />
      </Container>

      <div className="CardContainer">
        <h1>Cards Made with CSS</h1>
        <Card title="이렇게" imgsrc={image1} />
        <Card title="카드들도" imgsrc={image2} />
        <Card title="만들 수 있어요!" imgsrc={image3} />
      </div>
      <_3DComponent />
    </>
  );
};

export default LayOut;
