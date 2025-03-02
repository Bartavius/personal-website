'use client';
import { useState } from "react";
import Darkmode from "../../components/darkmode";
import Navbar from "../../components/navbar";
import EducationSection from "../../sections/EducationSection/EducationSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    {/* //   <div className="workmode">
    //   <HeroSection />
    //   </div> */}
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
            <h3>Skills Modal</h3>
            <p>This is the modal content.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
