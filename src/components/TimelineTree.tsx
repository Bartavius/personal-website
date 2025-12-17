"use client";
import { useState, useEffect } from "react";
import IconContainer from "./iconContainer";
import "./TimelineTree.css";
import Image from "next/image";

function LanguagesContainer({ languages }: { languages: any[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const MOBILE_LIMIT = 3;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleLanguages =
    isMobile && !showAll ? languages.slice(0, MOBILE_LIMIT) : languages;

  const hasMore = languages.length > MOBILE_LIMIT;

  return (
    <div className="languages-wrapper">
      <div className="languages-container">
        {visibleLanguages.map((lang: any, idx: number) => (
          <IconContainer
            name={lang.name}
            icon={lang.icon}
            key={idx}
            className="small"
          />
        ))}
      </div>
      {isMobile && hasMore && (
        <button
          className="languages-toggle"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `+${languages.length - MOBILE_LIMIT} more`}
        </button>
      )}
    </div>
  );
}

export default function TimelineTree({ tree }: { tree: any }) {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {tree.timeline.map((entry: any, index: number) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              {entry.logo && (
                <div className={`timeline-logo ${entry.app ? "app-logo" : ""}`}>
                  <Image
                    src={entry.logo}
                    alt="logo"
                    draggable={false}
                    width={100}
                    height={100}
                    loading="eager"
                    priority
                  />
                </div>
              )}
              <div className="timeline-time">{entry.time}</div>
              <div className="timeline-time">{entry.location}</div>
            </div>

            <div className="timeline-center">
              <div className="timeline-dot"></div>
              {index !== tree.timeline.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>

            <div className="timeline-content">
              {entry.logo && (
                <div
                  className={`timeline-logo-mobile ${
                    entry.app ? "app-logo" : ""
                  }`}
                >
                  <Image
                    src={entry.logo}
                    alt="logo"
                    width={100}
                    height={100}
                    draggable={false}
                    loading="eager"
                    priority
                  />
                </div>
              )}
              <h2 className="timeline-company">{entry.company}</h2>
              <h3 className="timeline-role">{entry.role}</h3>
              <div className="timeline-location-mobile">{entry.location}</div>
              <div className="timeline-time-mobile">{entry.time}</div>
              <ul className="timeline-list">
                {entry.lines.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
              {entry.languages && entry.languages.length > 0 && (
                <LanguagesContainer languages={entry.languages} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
