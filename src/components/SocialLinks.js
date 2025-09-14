import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/r-mistry/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/mistry-r" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="mailto:rohan.mistry@uwaterloo.ca"><FaEnvelope /></a>
      <a href="https://drive.google.com/file/d/1AMxaAxDZ_kbaAug-nwvV4PaR2IaSIruH/view?usp=sharing" target="_blank" rel="noreferrer"><FaFileAlt /></a>
    </div>
  );
}

export default SocialLinks;
