import React from "react";
import nsLogo from "../assets/novascan.png";
import uwLogo from "../assets/uw.png";
import dalsaLogo from "../assets/tdalsa.png";
//import igemLogo from "../assets/iGEM.png";
import gemLogo from "../assets/gem.png";
import omatLogo from "../assets/omat.png";

const experiences = [
  {
    company: "NovaScan",
    logo: nsLogo,
    role: "Data Science Intern",
    duration: "Sep 2024 – Present",
    location: "Chicago, IL"
  },
  {
    company: "NovaScan",
    logo: nsLogo,
    role: "Data Analysis Intern",
    duration: "May 2024 – Aug 2024",
    location: "Chicago, IL"
  },
  {
    company: "Arami Research Lab",
    logo: uwLogo,
    role: "Undergraduate Research Assistant",
    duration: "Jan 2024 – Apr 2024",
    location: "Waterloo, ON"
  },
  {
    company: "Teledyne DALSA",
    logo: dalsaLogo,
    role: "2D Image Sensor Test and Image Processing Developer",
    duration: "Sep 2023 – Dec 2023",
    location: "Waterloo, ON"
  },
  {
    company: "Guelph Eye MD Clinic",
    logo: gemLogo,
    role: "Software Developer and Medical Technician",
    duration: "Jan 2023 – Apr 2023",
    location: "Guelph, ON"
  },
  {
    company: "Attorney General",
    logo: omatLogo,
    role: "System Support Officer (SSO) - Programmer",
    duration: "May 2022 – Aug 2022",
    location: "Toronto, ON"
  }
];

function Career() {
  return (
    <div className="career-container">
      {experiences.map((exp, index) => (
        <div className="career-item" key={index}>
          <div className="career-item-content">
            <img src={exp.logo} alt={exp.company} />
            <div className="career-text">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
            <div className="career-meta">
              <h3>{exp.duration}</h3>
              <p>{exp.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Career;
