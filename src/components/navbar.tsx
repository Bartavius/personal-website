"use client";

import { useEffect, useState } from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import { FaHamburger } from "react-icons/fa";

export default function Navbar({
  setSkills,
  setContacts,
  skillModal,
  contactsModal,
  isMobile,
}: {
  setSkills: (val: boolean) => void;
  setContacts: (val: boolean) => void;
  skillModal: boolean;
  contactsModal: boolean;
  isMobile: boolean;
}) {
  const tabs = ["home", "skills", "qualifications", "projects", "contacts"];
  const [hamburgerOpen, setHamburgerOpen] = useState(!isMobile);
  const router = useRouter();
  useEffect(() => {
    setHamburgerOpen(!isMobile);
  }, [isMobile]);

  return (
    <div>
      <div className="navbar">
        <div
          className={`navbar-container ${hamburgerOpen && "hamburger-active"}`}
        >
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
        <div
          className="hamburger"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <FaHamburger />
        </div>
      </div>
    </div>
  );
}
