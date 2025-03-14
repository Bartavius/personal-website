"use client";

import { useState } from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import { FaHamburger } from "react-icons/fa";

export default function Navbar({
  setSkills,
  setContacts,
  skillModal,
  contactsModal
}: {
  setSkills: (val: boolean) => void;
  setContacts: (val: boolean) => void;
  skillModal: boolean;
  contactsModal: boolean;
}) {
  const tabs = ["home", "skills", "projects", "education", "contacts"];
  const [hamburger, setHamburger] = useState(true);
  const router = useRouter();

  return (
    <div>
      <div className="navbar">
        <div className={`navbar-container grid grid-cols-3 gap-4 relative ${hamburger && "hamburger-active"}`}>
          {tabs.map((tab) => (
            <span
              key={tab}
              className="nav-text"
              onClick={() => {
                if (tab === "skills") setSkills(!skillModal);
                else if (tab === "contacts") setContacts(!contactsModal);
                else router.push(`#${tab}`);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>
        <div className="hamburger" onClick={() => setHamburger(!hamburger)}>
        <FaHamburger />
      </div>
        
      </div>
    </div>
  );
}
