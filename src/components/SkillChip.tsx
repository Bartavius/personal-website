import "./SkillChip.css";
import { useAppSound } from "./SoundProvider";
import Image from "next/image";

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
          <Image
            src={icon}
            alt={name}
            width={40}
            height={40}
            loading="eager"
            priority
          />
        ) : (
          <span className="skill-icon-fallback">{name.charAt(0)}</span>
        )}
      </div>
      <span className="skill-icon-label">{name}</span>
    </div>
  );
}
