import IconContainer from "./iconContainer";
import languages from "../database/skills/languages.json";
import frontend from "../database/skills/frontend.json";
import backend from "../database/skills/backend.json";
import database from "../database/skills/database.json";
import "./SkillsModal.css";
import { motion } from "framer-motion";

export default function Skills({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  return (
    <motion.div
      key="skills-modal"
      className="skills-modal"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <span className="sub-heading">Skills & Technologies</span>
       <div className="smaller-section-divider"></div>
      <div className="icons">
        <h1 className="skill-subheading">Languages</h1>
        <div className="skills-languages">
          {languages.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
        <h1 className="skill-subheading">Frontend Technologies</h1>
        <div className="skills-techstack">
          {frontend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
        <h1 className="skill-subheading">Backend Technologies</h1>
        <div className="skills-techstack">
          {backend.map((tech) => (
            <IconContainer name={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
        <h1 className="skill-subheading">Databases</h1>
        <div className="skills-techstack">
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
    </motion.div>
  );
}
