import "./SkillChip.css";

export default function SkillChip({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className="skill-icon-wrapper">
      <div className="skill-icon">
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