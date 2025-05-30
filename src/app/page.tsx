"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import EducationSection from "../sections/EducationSection/EducationSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import Skills from "../components/SkillsModal";
import Contacts from "@/components/Contacts";
import AboutSection from "@/sections/AboutSection/AboutSection";
import { motion } from "framer-motion";
import images from "../database/ProfileImages.json";

export default function Home() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCanRender(true);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!canRender) return null;

  // if (isMobile) {
  //   return (
  //     <motion.div
  //       key={"workmode"}
  //       className="workmode"
  //       initial={{ opacity: 0, x: 50 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       exit={{ opacity: 0, x: -50 }}
  //       transition={{ duration: 0.5 }}
  //     >
  //       <h1>Please open this page on a desktop.</h1>
  //       <p>
  //         This page is not optimized for screens with a width of less than 760px
  //       </p>
  //     </motion.div>
  //   );
  // }

  return (
    <div>
      <div className="container">
        {/* <Darkmode /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          // style={{ width: "120%", zIndex: 1000 }}
        >
          <Navbar
            setSkills={setIsSkillModalOpen}
            skillModal={isSkillModalOpen}
            setContacts={setIsContactsModalOpen}
            contactsModal={isContactsModalOpen}
            isMobile={isMobile}
          />
        </motion.div>

        <div key={"home"} className="home" id="home">
          <HeroSection
            setSkills={setIsSkillModalOpen}
            modal={isSkillModalOpen}
          />
        </div>

        <motion.div
          key="projects"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="projects"
          id="projects"
        >
          <ProjectSection />
        </motion.div>

        <motion.div
          key="education"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="education"
          id="education"
        >
          <EducationSection />
        </motion.div>
        <motion.div
          key="about"
          className="about-site"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection />
        </motion.div>
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

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
