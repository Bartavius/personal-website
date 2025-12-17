import "./SkillChip.css";
import { useAppSound } from "./SoundProvider";

export default function SkillChip({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  const { playClick } = useAppSound();
  return (
    <div className="skill-icon-wrapper" onClick={playClick}>
      <div className="skill-icon" draggable={false}>
        {icon ? (
          <img src={icon} alt={name} />
        ) : (
          <span className="skill-icon-fallback">{name.charAt(0)}</span>
        )}
      </div>
      <span className="skill-icon-label">{name}</span>
    </div>
  );
}