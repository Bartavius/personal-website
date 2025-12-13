"use client";
import { motion } from "framer-motion";
import TimelineTree from "./TimelineTree";
import "./ToggleTimeline.css";
import { useState } from "react";


export default function ToggleTimeline({ tree }: { tree: any[] }) {
  const [toggled, setToggled] = useState<string>(tree[0]?.name || "");
  const [key, setKey] = useState<number>(Date.now());
  
  const selectedTab = tree.find((tab: any) => tab.name === toggled);

  const handleTabClick = (tabName: string) => {
    setToggled(tabName);
    setKey(Date.now());
  };

  if (!selectedTab) return null;

  return (
    <motion.div
      key="toggled-timeline"
      className="toggled-timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="toggled-tabs">
        {tree.map((tab: any, index: number) => (
          <button
            key={index}
            className={`tab-element ${
              selectedTab.name === tab.name ? "tab-element-selected" : ""
            }`}
            onClick={() => handleTabClick(tab.name)}
            aria-label={`Switch to ${tab.name} timeline`}
            aria-pressed={selectedTab.name === tab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <motion.div
        key={key}
        className="timeline-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <TimelineTree tree={selectedTab} />
      </motion.div>
    </motion.div>
  );
}