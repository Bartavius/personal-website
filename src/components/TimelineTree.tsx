import IconContainer from "./iconContainer";
import "./TimelineTree.css";

export default function TimelineTree({ tree }: { tree: any }) {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {tree.timeline.map((entry: any, index: number) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              {entry.logo && (
                <div className={`timeline-logo ${entry.app ? "app-logo" : ""}`}>
                  <img src={entry.logo} alt="logo" />
                </div>
              )}
              <div className="timeline-time">{entry.time}</div>
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
                  <img src={entry.logo} alt="logo" />
                </div>
              )}
              <h2 className="timeline-company">{entry.company}</h2>
              <h3 className="timeline-role">{entry.role}</h3>
              <div className="timeline-time-mobile">{entry.time}</div>
              <ul className="timeline-list">
                {entry.lines.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
              <div className="languages-container">
                {entry.languages && entry.languages.map((lang: any, idx: number) => (
                  <IconContainer
                    name={lang.name}
                    icon={lang.icon}
                    className="bg-low"
                    key={lang.name}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
