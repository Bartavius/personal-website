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
  setModal: (val: boolean) => void;
}) {

  return (
  <div id={`project-${name}`}>
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
        <a href={link} target="_blank">
        <button className="btn-primary">Check it out!</button></a>
    </div>
  </div>);
}
