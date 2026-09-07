import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Dhruv Soni </span>
            from <span className="purple">Toronto, Canada</span>
            <br />
            I am currently pursuing a Bachelor of Engineering in{" "}
            <span className="purple">Computer Engineering (Co-op)</span> at
            York University.
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">
              embedded systems, robotics, hardware design, and
              hardware-software integration.
            </span>
            <br />
            <br />
            Through engineering projects and student teams, I have gained
            hands-on experience with microcontrollers, sensors, PCB design,
            embedded C++, and real-time systems.
            <br />
            <br />
            Apart from engineering, some other activities that I enjoy!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>

            <li className="about-activity">
              <ImPointRight /> Building personal projects
            </li>

            <li className="about-activity">
              <ImPointRight /> Robotics and hands-on experimentation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
