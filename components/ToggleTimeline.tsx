"use client";
import TimelineTree from "./TimelineTree";
import "./ToggleTimeline.css";
import { useState } from "react";

export default function ToggleTimeline({ tree }: { tree: any }) {
  const [toggled, setToggled] = useState(tree[0] ? tree[0].name : "");
  const selectedTab = tree.find((tab: any) => tab.name === toggled);
  return (
    <div className="toggled-timeline">
      <div className="toggled-tabs">
        {tree.map((tab: any, index: number) => (
          <button
            key={index}
            className={`tab-element ${
              selectedTab === tab.name ? "tab-element-selected" : ""
            }`}
            onClick={(e) => setToggled(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <TimelineTree tree={selectedTab}/>
    </div>
  );
}
