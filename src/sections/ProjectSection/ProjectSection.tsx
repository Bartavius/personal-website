import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import projects from "../../database/Projects.json";
import "./ProjectSection.css";
import { motion } from "framer-motion";
import Tooltip from "../../components/Tooltip";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="project-section">
      <div className="sub-heading">Projects</div>
      <div className="section-divider"></div>
      <div className="project-list">
        {projects.map((project, index) => (
          
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.25,
              delay: +0.1 * (index + 1),
              ease: "easeInOut",
            }}
            key={index}
            className="project-card"
            onClick={() => setActiveProject(project)}
          ><Tooltip text="Click me!">
            <div className="project-card-thumbnail">
              <img
                src={project.thumbnail}
                alt="thumbnail"
                className="thumbnail"
              />
            </div>
            <div className="project-title">{project.name}</div>
          </Tooltip></motion.div>
        ))}
      </div>
      {activeProject && (
        <div className="modal-overlay">
          <ProjectModal
            {...activeProject}
            setModal={() => setActiveProject(null)}
          />
        </div>
      )}
    </div>
  );
}
