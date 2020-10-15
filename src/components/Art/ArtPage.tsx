import React from "react";

import { Row, Col, Container } from "react-bootstrap";
export const Art: React.FC = () => {
  let winWidth = window.innerWidth;
  
  
  const setWidth = () => {
    if(winWidth <= 768)
      return "350"
    return "400"
  }
  return (

    <>
    <div className='SectionHeader-Blue'>Some art I made. I draw inspiration from surrealism artists.</div>
    <div className="grid">
      <Row xs={1} md={2} lg={2}>
        <Col>
          <div className='art-container'>
            <iframe
              title="stacks"
              src='https://editor.p5js.org/pmorgan3/embed/9pA5ic5xH'
              width={setWidth()}
              height='400'
            ></iframe>
          </div>
        </Col>
        <Col><div className="box-separator"></div></Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
      <Col><div className="box-separator"></div></Col>
      <Col>
        <div className='art-container'>
        <iframe
          title="Tuesday"
          src="https://editor.p5js.org/pmorgan3/embed/pJFhSp6Ln"
          width={setWidth()}
          height="400"
        ></iframe>
        </div>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
        <Col>
          <div className='art-container'>
          <iframe
          title="colorStack"
          src="https://editor.p5js.org/pmorgan3/embed/ebxVBoS1r"
          width={setWidth()}
          height="400"
        ></iframe>
          </div>
        </Col>
        <Col><div className="box-separator"></div></Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
      <Col><div className="box-separator"></div></Col>
      <Col>
        <div className='art-container'>
        <iframe src="https://editor.p5js.org/pmorgan3/embed/V1Ynqr1G-"
        title="morecolor"
        width={setWidth()}
        height="400"></iframe>
        </div>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
        <Col>
          <div className='art-container'>
          <iframe src="https://editor.p5js.org/pmorgan3/embed/EUS0zyYMF"
            title="white"
            width={setWidth()}
            height="400"
          ></iframe>
          </div>
        </Col>
        <Col><div className="box-separator"></div></Col>
      </Row>
      </div>
    </>
  );
};
