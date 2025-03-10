"use client";
import { useState } from "react";
import IconContainer from "./iconContainer";
import "./ProjectModal.css";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectModal({
  name,
  description,
  linkName,
  link,
  thumbnail,
  videoLink,
  languages,
  techstack,
  setModal,
}: {
  name: string;
  description: string;
  linkName: string;
  link: string;
  thumbnail: string;
  videoLink?: string;
  languages: any[];
  techstack: any[];
  setModal: (val: boolean | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 300;
  const shouldTruncate = description.length > maxLength;
  const displayText = expanded
    ? description
    : description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <div id={`project-${name}`} className="modal">
      <motion.div
        key={`project-${name}`}
        className="modal-content"
        initial={{ opacity: 0, y: 50, width: "100%", height: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="project-modal">
          <div className="project-body">
            <div className="project-left">
              <div className="project-thumbnail">
                {videoLink ? (
                  <iframe
                    src={`${videoLink}?autoplay=1&mute=1`}
                    title={name}
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    className="project-video"
                  />
                ) : (
                  <a href={link} target="_blank" title={link}>
                    <img
                      src={thumbnail}
                      alt="thumbnail"
                      className="project-thumbnail"
                    />
                  </a>
                )}
              </div>
              <div className="project-name">{name}</div>
            </div>

            <div className="project-right">
              <div className="project-description">
                <h2 className="project-subheading">Description</h2>
                {displayText}
                {shouldTruncate && (
                  <button
                    className="read-more-btn"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? " Show Less" : " Read More"}
                  </button>
                )}
              </div>
              <div className="project-icons">
                <h2 className="project-subheading">Languages</h2>
                <div className="languages">
                  {languages.map((lang) => (
                    <IconContainer
                      name={lang.name}
                      icon={lang.icon}
                      key={lang.name}
                    />
                  ))}
                </div>
                <h2 className="project-subheading">Tech Stack</h2>
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
          </div>

          <div className="project-footer">
            <button
              className="btn-secondary text-secondary"
              onClick={() => setModal(null)}
            >
              Close
            </button>
            {link === "" ? (
              <button className="btn-primary text-primary" disabled>
                {linkName}
              </button>
            ) : (
              <a href={link} target="_blank">
                <button className="btn-primary text-primary button-with-icon">
                  {linkName} <FaArrowUpRightFromSquare className="icon" />
                </button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
