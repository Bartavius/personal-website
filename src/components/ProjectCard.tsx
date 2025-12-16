import { useState } from "react";
import Tooltip from "./Tooltip";
import "./ProjectCard.css";

function ProjectCard({
  project,
  index,
  isVisible,
  groupSize,
  onClick,
}: {
  project: any;
  index: number;
  isVisible: boolean;
  groupSize: number;
  onClick: () => void;
}) {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <div
      className={`project-card ${isVisible && !animationDone ? "animate-project" : ""} ${animationDone ? "animation-done" : ""}`}
      style={isVisible && !animationDone ? { animationDelay: `${(index % groupSize) * 0.1}s` } : undefined}
      onAnimationEnd={() => setAnimationDone(true)}
      onClick={onClick}
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
  );
}

export default ProjectCard;