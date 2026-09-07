import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/avatar.svg";

import Tilt from "react-parallax-tilt";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a Computer Engineering student at York University with a
              strong interest in building practical, real-world systems that
              combine software and hardware.
              <br />
              <br />
              I enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  C++, Python, Java, and MATLAB
                </b>
              </i>
              , especially for embedded systems, robotics, and automation.
              <br />
              <br />
              My fields of interest include
              <i>
                <b className="purple">
                  {" "}
                  Embedded Systems, Robotics, IoT, and Hardware-Software
                  Integration.
                </b>
              </i>
              <br />
              <br />
              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  Arduino, ESP32, sensors, PCB design, and real-time motor
                  control.
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sonidhruv1272"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-soni-6a7a12334/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
