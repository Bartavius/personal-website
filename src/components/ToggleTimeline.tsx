"use client";
import { motion } from "framer-motion";
import TimelineTree from "./TimelineTree";
import "./ToggleTimeline.css";
import { useState } from "react";

export default function ToggleTimeline({ tree }: { tree: any }) {
  const [toggled, setToggled] = useState(tree[0] ? tree[0].name : "");
  const [key, setKey] = useState(Date.now()); // key to trigger a re-render of the tree when the tab changes
  const selectedTab = tree.find((tab: any) => tab.name === toggled);

  const handleTabClick = (tabName: string) => {
    setToggled(tabName);
    setKey(Date.now());
  };

  return (
    <motion.div
      key={"toggled-timeline"}
      className="toggled-timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0}}
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
          >
            {tab.name}
          </button>
        ))}
      </div>

      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TimelineTree tree={selectedTab} />
      </motion.div>
    </motion.div>
  );
}
