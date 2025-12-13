import "./SkillsModal.css";

export default function IconContainer({
  name,
  icon,
  className,
}: {
  name: string;
  icon: any;
  className?: string;
}) {
  return (
    <div key={name} className="tech">
      <div className={`icon-container ${className}`}>
        <span className="icon">
          {icon !== "" && <img src={icon} alt="" />} {name}
        </span>
      </div>
    </div>
  );
}
