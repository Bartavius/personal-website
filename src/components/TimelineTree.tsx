'use client';
import { motion } from 'framer-motion';
import "./TimelineTree.css";

export default function TimelineTree({ tree }: { tree: any }) {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {tree.timeline.map((entry: any, index: number) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <div className="timeline-time">
              {entry.time}
            </div>

            <div className="timeline-content">
              <ul className="timeline-list">
                {entry.lines.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
