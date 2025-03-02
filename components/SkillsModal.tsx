import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaFlask,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiRacket,
  SiCplusplus,
  SiDjango,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import "./SkillsModal.css";

const languages = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Dr. Racket", icon: <SiRacket /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <FaFlask /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

export default function Skills({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  return (
    <div className="skills-modal">
      <h1 className="sub-heading">Skills & Technologies</h1>
      <div className="icons">
        <div className="languages">
          {languages.map((lang) => (
            <div key={lang.name} className="language">
              <div className="icon-container">
                <span className="icon">
                  {lang.icon} {lang.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="techstack">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech">
              <div className="icon-container">
                <span className="icon">
                  {tech.icon} {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
      <div className="modal-footer">
        <button
          className="btn-secondary text-secondary"
          onClick={() => closeModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
