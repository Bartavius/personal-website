import { useState } from "react";
import Tooltip from "./Tooltip";
import "./ProjectCard.css";
import { useAppSound } from "./SoundProvider";
import Image from "next/image";

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
  const { playClick } = useAppSound();

  return (
    <div
      className={`project-card ${
        isVisible && !animationDone ? "animate-project" : ""
      } ${animationDone ? "animation-done" : ""}`}
      style={
        isVisible && !animationDone
          ? { animationDelay: `${(index % groupSize) * 0.1}s` }
          : undefined
      }
      onAnimationEnd={() => setAnimationDone(true)}
      onClick={() => {
        playClick();
        onClick();
      }}
    >
      <Tooltip text="Click me!">
        <div className="project-card-thumbnail">
          <Image
            key={project.thumbnail}
            src={project.thumbnail}
            alt="thumbnail"
            className="thumbnail"
            draggable={false}
            width={400}
            height={200}
            loading="eager"
            priority
          />
        </div>
        <div className="project-title">{project.name}</div>
      </Tooltip>
    </div>
  );
}

export default ProjectCard;
