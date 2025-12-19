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
  const PROJECTS_PER_GROUP = 3;
  const { playClick } = useAppSound();
  const [animatedProjects, setAnimatedProjects] = useState<Set<string>>(new Set());
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [visibleGroups, setVisibleGroups] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, isVisible } = useInView(0.1);
  const filters: string[] = [
    "Full Stack",
    "Frontend",
    "Backend",
    "Database",
    "AI",
  ];
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset visible groups when filters change
  useEffect(() => {
    setVisibleGroups(1);
  }, [activeFilters]);

  const toggleFilter = (filter: string) => {
    playClick();
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Filter first, then slice for mobile
  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((p) => activeFilters.some((f) => p.tags?.includes(f)));

  const visibleProjects = isMobile
    ? filteredProjects.slice(0, visibleGroups * PROJECTS_PER_GROUP)
    : filteredProjects;

  const hasMore = visibleProjects.length < filteredProjects.length;
  const canShowLess = visibleGroups > 1;

  return (
    <div className="project-section">
      <div className="sub-heading">Projects</div>
      <div className="section-divider"></div>

      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${
              activeFilters.includes(filter) ? "active" : ""
            }`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            className="filter-pill clear"
            onClick={() => {
              playClick();
              setActiveFilters([]);
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div className="project-list" ref={ref}>
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isVisible={isVisible}
              groupSize={PROJECTS_PER_GROUP}
              onClick={() => setActiveProject(project)}
              hasAnimated={animatedProjects.has(project.name)}
              onAnimationDone={() =>
                setAnimatedProjects((prev) => new Set(prev).add(project.name))
              }
            />
          ))
        ) : (
          <div className="no-projects">
            No projects match the selected filters
          </div>
        )}
      </div>

      {isMobile && (hasMore || canShowLess) && (
        <div className="showmore">
          {hasMore && (
            <button
              className="btn-secondary text-secondary"
              onClick={() => {
                setVisibleGroups((prev) => prev + 1);
                playClick();
              }}
            >
              <span>Show More</span>
            </button>
          )}
          {canShowLess && (
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
