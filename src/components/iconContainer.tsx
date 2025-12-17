import Image from "next/image";
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
          {icon !== "" && (
            <Image
              src={icon}
              alt=""
              draggable={false}
              width={40}
              height={40}
              loading="eager"
              priority
            />
          )}{" "}
          {name}
        </span>
      </div>
    </div>
  );
}
