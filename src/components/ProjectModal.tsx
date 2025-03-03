"use client";
import IconContainer from "./iconContainer";
import "./ProjectModal.css";
export default function ProjectModal({
  title,
  description,
  link,
  techstack
}: {
  title: string;
  description: string;
  link: string;
  techstack: any[];
  setModal: (val: boolean) => void;
}) {
  return (
  <div id={`project-${title}`}>
    <div className="project-title">{title}</div>
    <div className="project-description">{description}</div>
    {techstack.map((tech) => (
        <IconContainer name={tech.name} icon={tech.icon} />
    ))}
    <div className="project-footer">
        <a href={link} target="_blank">
        <button className="btn-primary">Check it out!</button></a>
    </div>
  </div>);
}
