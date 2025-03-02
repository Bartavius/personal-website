"use client";

import { useState } from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";

export default function Navbar({
  setSkills,
  modal,
}: {
  setSkills: (val: boolean) => void;
  modal: boolean;
}) {
  const tabs = ["home", "skills", "projects", "education"];
  const router = useRouter();
  return (
    <div className="navbar">
      <div className="navbar-container grid grid-cols-3 gap-4 relative">
        {tabs.map((tab) => (
          <span
            key={tab}
            className="nav-text"
            onClick={() => {
              if (tab === "skills") setSkills(!modal);
              else router.push(`#${tab}`);
              
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}
