"use client";
import IconContainer from "./iconContainer";
import "./ProjectModal.css";
export default function ProjectModal({
  name,
  description,
  linkName,
  link,
  thumbnail,
  languages,
  techstack,
  setModal,
}: {
    name: string,
    description: string,
    linkName: string,
    link: string,
    thumbnail: string,
    languages: any[],
    techstack: any[],
  setModal: (val: boolean | null) => void;
}) {

  return (
  <div id={`project-${name}`}>
    <div className="project-thumbnail">{<img src={thumbnail} />}</div>
    <div className="project-title">{name}</div>
    <div className="project-description">{description}</div>
    <div className="languages">
    {languages.map((lang) => (
        <IconContainer name={lang.name} icon={lang.icon} />
    ))}
    </div>
    <div className="techstack">{techstack.map((tech) => (
        <IconContainer name={tech.name} icon={tech.icon} />
    ))}</div>
    <div className="project-footer">
        <button className="btn-secondary" onClick={() => setModal(null)}>Close</button>
        <a href={link} target="_blank">
        <button className="btn-primary">{linkName}</button></a>
    </div>
  </div>);
}
