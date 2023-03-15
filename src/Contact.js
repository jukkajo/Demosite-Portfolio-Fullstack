import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="contact-info">
      <img src="/npc.png" alt="profile picture" className="profile-pic" />
      <h3>Contact Information</h3>
      <div className="info">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>jajoutzs@student.jyu.fi</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Studying</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Jyväskylä</span>
        </div>
        <div className="social-media">
          <a href="https://github.com/jukkajo" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/jukka-joutsalainen-275a28246/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
    </div>
  );
}

export default About;

