'use client';

import React from 'react';
import './TimelineTree.css';

export default function TimelineTree({tree} : {tree: any}) {
  return (
    <div className="timeline-tree">
      {tree.timeline.map((entry: any, index: number) => (
        <div key={index} className="timeline-entry">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <div className="timeline-time">{entry.time}</div>
            <ul className="timeline-lines">
              {entry.lines.map((line: string, idx: number) => (
                <li key={idx} className="timeline-item">{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
