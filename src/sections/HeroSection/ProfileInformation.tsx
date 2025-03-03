import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import "./HeroSection.css";

export default function ProfileInformation({setSkills, modal} : {setSkills: (val: boolean) => void, modal: boolean}) {
  return (
    <div className="hero-profile">
      <div className="hero-details">
        <div className="grid grid-cols-1">
          <span className="name">
            Jirath "Bart" Lojanarungsiri
            </span>
          <span className="title"><span className="typing">Full-Stack Developer</span></span>
          <div className="location-based grid grid-cols-1">
            <span className="location">Boston, USA <IoIosPin /></span>
            <span className="location">Bangkok, Thailand <IoIosPin /></span>
          </div>
        </div>
        <div className="detail-buttons">
          <div className="social-links">
            <a
              href="https://linkedin.com/in/jlojanarungsiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                <span className="text-primary">
                  <FaLinkedin className="social-icon" />
                  LinkedIn
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Bartavius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                <span className="text-primary">
                  <FaGithub className="social-icon" />
                  GitHub
                </span>
              </button>
            </a>
          </div>
          <div className="additional-links">
              <button className="btn-secondary" onClick={() => setSkills(!modal)}>
                <span className="text-secondary">Skills</span>
              </button>
            <a
              href="files/Jirath-Lojanarungsiri-Web-Developer-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-secondary">
                <span className="text-secondary">Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
