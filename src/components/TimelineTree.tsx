'use client';
import { motion } from 'framer-motion';
import "./TimelineTree.css";

export default function TimelineTree({ tree }: { tree: any }) {
  return (
    <div className="timeline-container">
      <motion.div
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="timeline">
          {tree.timeline.map((entry: any, index: number) => (
            <div key={index} className="timeline-item">
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
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
