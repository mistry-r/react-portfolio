import React from "react";
import rohan from "../assets/rohan.JPG";

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <div className="left">
          <img src={rohan} alt="Rohan" className="profile-pic" />
        </div>
        <div className="right">
          <h1>Hi, I’m Rohan</h1>
          <h2>I'm a 4th-year Biomedical Engineering student at the University of Waterloo</h2>
          <p>🧠 Specializing in medical AI and neural engineering</p>
          <p>🔬 Passionate about biomedical research and developing medical hardware solutions</p>
          <p>🩺 Currently developing machine learning models for{' '}
            <a
              href="https://novascaninc.com/technology/margin-scan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <b>MarginScan™</b>
            </a>{' '}
            to predict cancerous tissues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
