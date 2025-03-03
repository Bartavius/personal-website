import IconContainer from "./iconContainer";
import "./SkillsModal.css";

const languages = [
  { name: "Python", icon: <img src="/logo/python.png" /> },
  { name: "Java", icon: <img src="/logo/java.png" /> },
  { name: "TypeScript", icon: <img src="/logo/typescript.png" /> },
  { name: "JavaScript", icon: <img src="/logo/javascript.png" /> },
  { name: "Kotlin", icon: <img src="/logo/kotlin.png" /> },
  { name: "Dr. Racket", icon: <img src="/logo/racket.png" /> },
  { name: "C++", icon: <img src="/logo/cplusplus.png" /> },
  { name: "HTML5", icon: <img src="/logo/html5.png" /> },
  { name: "CSS", icon: <img src="/logo/css.png" /> },
];

const backend = [
  { name: "Node.js", icon: <img src="/logo/nodejs.png" /> },
  { name: "Django", icon: <img src="/logo/django.png" /> },
  { name: "Flask", icon: <img src="/logo/flask.png" /> },
  { name: "Express.js", icon: <img src="/logo/express.png" /> },
];

const database = [
  { name: "MongoDB", icon: <img src="/logo/mongodb.png" /> },
  { name: "PostgreSQL", icon: <img src="/logo/postgresql.png" /> },
];

const frontend = [
  { name: "React", icon: <img src="/logo/react.png" /> },
  { name: "Next.js", icon: <img src="/logo/next.png" /> },
  { name: "Bootstrap", icon: <img src="/logo/bootstrap.png" /> },
  { name: "Tailwind CSS", icon: <img src="/logo/tailwind.png" /> },
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
        <h1 className="skill-subheading">Languages</h1>
        <div className="languages">
          {languages.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} />
          ))}
        </div>

        <h1 className="skill-subheading">Frontend Technologies</h1>
        <div className="techstack">
          {frontend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <h1 className="skill-subheading">Backend Technologies</h1>
        <div className="techstack">
          {backend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <h1 className="skill-subheading">Databases</h1>
        <div className="techstack">
          {database.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} />
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
