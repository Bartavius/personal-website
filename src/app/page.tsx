"use client";
import { useState, useEffect } from "react";
import Darkmode from "../components/darkmode";
import Navbar from "../components/navbar";
import EducationSection from "../sections/EducationSection/EducationSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import Skills from "../components/SkillsModal";
import Contacts from "@/components/Contacts";
import AboutSection from "@/sections/AboutSection/AboutSection";

export default function Home() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 806);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="workmode">
        <h1>Please open this page on a desktop.</h1>
        <p>This page is not optimized for mobile screens with a width of less than 806px</p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* <Darkmode /> */}
      <Navbar
        setSkills={setIsSkillModalOpen}
        skillModal={isSkillModalOpen}
        setContacts={setIsContactsModalOpen}
        contactsModal={isContactsModalOpen}
      />
      <div id="home">
        <HeroSection setSkills={setIsSkillModalOpen} modal={isSkillModalOpen} />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div className="about-site">
        <AboutSection />
      </div>

      {isSkillModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Skills closeModal={() => setIsSkillModalOpen(false)} />
          </div>
        </div>
      )}

      {isContactsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Contacts closeModal={() => setIsContactsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
