import { useState, useEffect, useRef } from "react";
import ProjectModal from "@/components/ProjectModal";
import projects from "../../database/Projects.json";
import "./ProjectSection.css";
import { AnimatePresence, motion } from "framer-motion";
import Tooltip from "../../components/Tooltip";

function useInView(threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [visibleGroups, setVisibleGroups] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, isVisible } = useInView(0.1);

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
      <div className="project-list" ref={ref}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.name}
            className={`project-card ${isVisible ? "animate-project" : ""}`}
            style={isVisible ? { animationDelay: `${(index % PROJECTS_PER_GROUP) * 0.1}s` } : undefined}
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
          </div>
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