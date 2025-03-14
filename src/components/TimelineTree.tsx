'use client';
import "./TimelineTree.css";

export default function TimelineTree({tree}: {tree: any}) {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {tree.timeline.map((entry: any, index: number) => (
          <div key={index} className="timeline-item">
            {/* Left side: Time section */}
            <div className="timeline-time">
              {entry.time}
            </div>

            {/* Right side: Content section */}
            <div className="timeline-content">
              <ul className="timeline-list">
                {entry.lines.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
