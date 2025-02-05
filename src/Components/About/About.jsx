import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="about-left">
          <img src={profile} alt=""></img>
        </div>
        <div className="about-description">
            <div className="about-para">
          <p>
            I am a passionate software engineer who loves to create innovative
            solutions using modern technologies. I have a strong foundation in
            programming languages like JavaScript, Python, and Java, as well as
            experience with web development frameworks like React, Angular, and
            Node.js.
          </p>
          <p>
            I have a deep love for problem-solving, and I strive to continuously
            improve my skills and knowledge base. I am always eager to learn new
            technologies and share my knowledge with others.
          </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p> HTML & CSS</p>
                <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>
                React JS 
              </p>
                <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>
                JavaScript
              </p>
                <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>
                Next JS
              </p>
                <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
