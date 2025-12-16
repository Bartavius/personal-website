import { useState, useEffect, useRef } from "react";
import ProjectModal from "@/components/ProjectModal";
import projects from "../../database/Projects.json";
import "./ProjectSection.css";
import ProjectCard from "@/components/ProjectCard";
import { useAppSound } from "@/components/SoundProvider";

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
  const { playClick } = useAppSound();

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
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            isVisible={isVisible}
            groupSize={PROJECTS_PER_GROUP}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {isMobile && (
        <div className="showmore">
          {visibleProjects.length < projects.length && (
            <button
              className="btn-secondary text-secondary"
              onClick={() => {
                showMore();
                playClick();
              }}
            >
              <span>Show More</span>
            </button>
          )}
          {visibleGroups > 1 && (
            <button
              className="btn-secondary text-secondary"
              onClick={() => {
                setVisibleGroups(1);
                playClick();
              }}
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
