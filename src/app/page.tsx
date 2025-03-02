'use client';
import { useState } from "react";
import Darkmode from "../../components/darkmode";
import Navbar from "../../components/navbar";
import EducationSection from "../../sections/EducationSection/EducationSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";
import Skills from "../../components/SkillsModal";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      {/* <Darkmode /> */}
      <Navbar setSkills={setIsModalOpen} modal={isModalOpen}/>
      <div id="home">
        <HeroSection setSkills={setIsModalOpen} modal={isModalOpen}/>
      </div>

      <div id="projects">
        <ProjectSection />
      </div>
      <div id="education">
        <EducationSection /> 
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Skills closeModal={() => setIsModalOpen(false)}/>
          </div>
        </div>
      )}

    </div>
  );
}
