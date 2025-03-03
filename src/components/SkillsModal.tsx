import IconContainer from "./iconContainer";
import languages from "../database/skills/languages.json"
import frontend from "../database/skills/frontend.json";
import backend from "../database/skills/backend.json";
import database from "../database/skills/database.json";
import "./SkillsModal.css";



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
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>

        <h1 className="skill-subheading">Frontend Technologies</h1>
        <div className="techstack">
          {frontend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
        <h1 className="skill-subheading">Backend Technologies</h1>
        <div className="techstack">
          {backend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
        <h1 className="skill-subheading">Databases</h1>
        <div className="techstack">
          {database.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
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
