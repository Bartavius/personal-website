"use client";
import { useState } from "react";
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
  name: string;
  description: string;
  linkName: string;
  link: string;
  thumbnail: string;
  languages: any[];
  techstack: any[];
  setModal: (val: boolean | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 250;
  const shouldTruncate = description.length > maxLength;
  const displayText = expanded ? description : description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <div id={`project-${name}`} className="modal">
      <div className="modal-content">
        <div className="project-modal">
          <div className="project-content">
            <div className="project-thumbnail">
              <img src={thumbnail} alt={`${name} thumbnail`} />
            </div>
            <div className="project-name">{name}</div>

            <div className="project-description">
              {displayText}
              {shouldTruncate && (
                <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
                  {expanded ? " Show Less" : " Read More"}
                </button>
              )}
            </div>

            <div className="project-icons">
              <h1 className="text-secondary">Languages</h1>
              <div className="languages">
                {languages.map((lang) => (
                  <IconContainer
                    name={lang.name}
                    icon={lang.icon}
                    key={lang.name}
                  />
                ))}
              </div>
              <h1 className="text-secondary">Tech Stack</h1>
              <div className="techstack">
                {techstack.map((tech) => (
                  <IconContainer
                    name={tech.name}
                    icon={tech.icon}
                    key={tech.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="smaller-section-divider"></div>
          <div className="project-footer">
            <button className="btn-secondary text-secondary" onClick={() => setModal(null)}>
              Close
            </button>
            {link === "" ? (
              <button className="btn-primary text-primary" disabled>
                {linkName}
              </button>
            ) : (
              <a href={link} target="_blank">
                <button className="btn-primary text-primary">{linkName}</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
