import { useState } from "react";
import "./ProjectSection.css";
import ProjectModal from "@/components/ProjectModal";
import projects from "../../database/Projects.json";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="project-section">
      <div className="sub-heading">Projects</div>
      <div className="section-divider"></div>
      <div className="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-thumbnail">
              <img
                src={project.thumbnail}
                alt="thumbnail"
                className="thumbnail"
              />
            </div>
            <div className="project-title">{project.name}</div>
          </div>
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