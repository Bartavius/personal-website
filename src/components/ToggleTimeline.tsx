"use client";
import { motion } from "framer-motion";
import TimelineTree from "./TimelineTree";
import "./ToggleTimeline.css";
import { useState } from "react";

export default function ToggleTimeline({ tree }: { tree: any }) {
  const [toggled, setToggled] = useState(tree[0] ? tree[0].name : "");
  const selectedTab = tree.find((tab: any) => tab.name === toggled);
  return (
    <motion.div 
    key={"toggled-timeline"}
    className="toggled-timeline"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
> 
      <div className="toggled-tabs">
        {tree.map((tab: any, index: number) => (
          <button
            key={index}
            className={`tab-element ${
              selectedTab.name === tab.name ? "tab-element-selected" : ""
            }`}
            onClick={(e) => setToggled(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <TimelineTree tree={selectedTab}/>
    </motion.div>
  );
}
