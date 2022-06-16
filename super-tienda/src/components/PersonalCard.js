import React from "react";
import "./styles/PersonalCardStyle.css";
import gitHub from "../assets/presentation-card/GitHub-Mark-Light-32px.png";
import linkind from "../assets/presentation-card/linkedin-32.ico";
import twitter from "../assets/presentation-card/twitter-32.ico";
export const PersonalCard = () => {
  return (
    <div>
      <section>
        <div className="card-container">
          <div className="background-container">
            <img src="https://i.pinimg.com/564x/f4/f3/27/f4f327132f2fae5c88e9fe2e6ca84cc8.jpg" />
          </div>

          <div className="personal-info">
            <hr></hr>
            <div className="description">
              <p>Sebastian Rodriguez</p>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className="footer-zone">
            <div className="icons-section">
              <a href="https://github.com/SrbastianM" className="git-hub">
                <img src={gitHub}></img>
              </a>

              <a
                href="https://www.linkedin.com/in/srbastianm/"
                className="linkedin"
              >
                <img src={linkind}></img>
              </a>
              <a
                href="https://twitter.com/_Tenkii_?t=VB8AAPa3SOrab4zZiHhudA&s=09"
                className="twitter"
              >
                <img src={twitter}></img>
              </a>
            </div>
          </div>

          <div className="avatar">
            <img src="https://i.pinimg.com/564x/1f/d8/7a/1fd87a04ba5e163afdff279954799d41.jpg"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalCard;
