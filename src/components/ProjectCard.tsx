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
  hasAnimated,
  onAnimationDone,
}: {
  project: any;
  index: number;
  isVisible: boolean;
  groupSize: number;
  onClick: () => void;
  hasAnimated: boolean;
  onAnimationDone: () => void;
}) {
  const { playClick } = useAppSound();
  const shouldAnimate = isVisible && !hasAnimated;

  return (
    <div
      className={`project-card ${shouldAnimate ? "animate-project" : ""} ${
        hasAnimated ? "animation-done" : ""
      }`}
      style={shouldAnimate ? { animationDelay: `${(index % groupSize) * 0.1}s` } : undefined}
      onAnimationEnd={onAnimationDone}
      onClick={() => {
        playClick();
        onClick();
      }}
    >
      <Tooltip text="Click me!">
        <div className="project-card-thumbnail">
          <Image
            src={project.thumbnail}
            alt="thumbnail"
            className="thumbnail"
            draggable={false}
            width={400}
            height={200}
            loading="eager"
            priority
            unoptimized
          />
        </div>
        <div className="project-title">{project.name}</div>
        <div className="project-short-description">{project.shortDescription}</div>
      </Tooltip>
    </div>
  );
}

export default ProjectCard;