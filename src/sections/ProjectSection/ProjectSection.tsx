import { useState, useEffect } from "react";
import ProjectModal from "@/components/ProjectModal";
import projects from "../../database/Projects.json";
import "./ProjectSection.css";
import { motion } from "framer-motion";
import Tooltip from "../../components/Tooltip";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [visibleGroups, setVisibleGroups] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const PROJECTS_PER_GROUP = 3;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleProjects = isMobile
    ? projects.slice(0, visibleGroups * PROJECTS_PER_GROUP)
    : projects;

  const showMore = () => setVisibleGroups((prev) => prev + 1);

  return (
    <div className="project-section">
      <div className="sub-heading">Projects</div>
      <div className="section-divider"></div>
      <div className="project-list">
        {visibleProjects.map((project, index) => (
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
          >
            <Tooltip text="Click me!">
              <div className="project-card-thumbnail">
                <img
                  src={project.thumbnail}
                  alt="thumbnail"
                  className="thumbnail"
                />
              </div>
              <div className="project-title">{project.name}</div>
            </Tooltip>
          </motion.div>
        ))}
      </div>

      {isMobile && (
        <div className="showmore">
          {visibleProjects.length < projects.length && (
            <button className="btn-secondary text-secondary" onClick={showMore}>
              <span>Show More</span>
            </button>
          )}
          {visibleGroups > 1 && (
            <button
              className="btn-secondary text-secondary"
              onClick={() => setVisibleGroups(1)}
            >
              <span>Show Less</span>
            </button>
          )}
        </div>
      )}

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
