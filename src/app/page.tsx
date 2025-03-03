"use client";
import { useState } from "react";
import Darkmode from "../components/darkmode";
import Navbar from "../components/navbar";
import EducationSection from "../sections/EducationSection/EducationSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import Skills from "../components/SkillsModal";
import Contacts from "@/components/Contacts";

export default function Home() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

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
