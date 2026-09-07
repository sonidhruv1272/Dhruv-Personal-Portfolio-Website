import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import robotics from "../../Assets/Projects/robotics.webp";
import personal from "../../Assets/Projects/personal.png";
import sevahub from "../../Assets/Projects/sevahub.png";
import rigor from "../../Assets/Projects/rigor.png";
import eduglow from "../../Assets/Projects/eduglow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Autonomous Sumobot Robot"
              description="Developed an autonomous Sumobot using C++ and Arduino with ultrasonic and infrared sensor fusion for real-time opponent and edge detection. Optimized motor control and timing logic to reduce response latency from 120ms to 70ms and improved competition win-rate by 35%."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Smart Doorbell System"
              description="Built a smart doorbell system using an ESP32-CAM, Arduino, Wi-Fi, and Blynk IoT. Implemented embedded C++ firmware for event detection and cloud synchronization with remote monitoring and notifications."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sevahub}
              isBlog={false}
              title="Fingerprint Door Lock System"
              description="Designed an Arduino-based fingerprint authentication system using a fingerprint sensor and servo-controlled locking mechanism. Implemented fingerprint enrollment, matching, and input validation in embedded C++."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rigor}
              isBlog={false}
              title="PCB Design Project"
              description="Designed and simulated a multi-layer PCB with a focus on efficient routing, component placement, circuit reliability, and noise reduction. Used simulation to identify potential issues before fabrication."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduglow}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Developed a responsive personal portfolio website using React and Bootstrap to showcase my engineering projects, technical skills, education, and experience. The website is hosted using GitHub Pages."
              ghLink="https://github.com/sonidhruv1272/Dhruv-Personal-Portfolio-Website"
              demoLink="https://sonidhruv1272.github.io/Dhruv-Personal-Portfolio-Website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
