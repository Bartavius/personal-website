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
import { DiPostgresql } from "react-icons/di";
import "./SkillsModal.css";

const languages = [
  { name: "Python", icon: <img src="/logo/python.png"/> },
  { name: "Java", icon: <img src="/logo/java.png"/> },
  { name: "TypeScript", icon: <img src="/logo/typescript.png"/> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Dr. Racket", icon: <SiRacket /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <FaFlask /> },
  { name: "Express.js", icon: <SiExpress /> },
];

const database = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <DiPostgresql />}
]

const frontend = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
]

export default function Skills({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  return (
    <div className="skills-modal">
      <h1 className="sub-heading">Skills & Technologies</h1>
      <div className="icons">
      <h1 className="text-secondary">Languages</h1>
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

        
        <h1 className="text-secondary">Frontend Technologies</h1>
        <div className="techstack">
          {frontend.map((tech) => (
            <div key={tech.name} className="tech">
              <div className="icon-container">
                <span className="icon">
                  {tech.icon} {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-secondary">Backend Technologies</h1>
        <div className="techstack">
          {backend.map((tech) => (
            <div key={tech.name} className="tech">
              <div className="icon-container">
                <span className="icon">
                  {tech.icon} {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-secondary">Databases</h1>
        <div className="techstack">
          {database.map((tech) => (
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
      <div className="smaller-section-divider"></div>
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
