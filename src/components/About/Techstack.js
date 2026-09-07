import React from "react";
import { Col, Row } from "react-bootstrap";

import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.55em" }}>MATLAB</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.45em" }}>Arduino</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.45em" }}>ESP32</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.42em" }}>PCB Design</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.42em" }}>Embedded</span>
      </Col>
    </Row>
  );
}

export default Techstack;
