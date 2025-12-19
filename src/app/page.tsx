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
import imageConfig from "../database/images.json";
import MusicPlayer from "@/components/musicplayer";

export default function Home() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  // Get images from config
  const criticalImages = imageConfig.critical;
  const lazyImages = imageConfig.lazy;

  // Preload critical images, then hide instant loader and show site
  useEffect(() => {
    let loadedCount = 0;
    const totalCritical = criticalImages.length;

    if (totalCritical === 0) {
      hideInstantLoader();
      return;
    }

    // Safety timeout: show site after 10 seconds regardless
    const timeoutId = setTimeout(() => {
      console.warn('Loading timeout reached - showing site');
      hideInstantLoader();
    }, 5000);

    criticalImages.forEach((imgPath) => {
      const image = new Image();
      image.onload = image.onerror = () => {
        loadedCount++;
        
        if (loadedCount === totalCritical) {
          clearTimeout(timeoutId);
          // Small delay for smooth transition
          setTimeout(() => {
            hideInstantLoader();
          }, 300);
        }
      };
      image.src = imgPath;
    });

    return () => clearTimeout(timeoutId);
  }, [criticalImages]);

  // Helper function to hide the instant loader
  const hideInstantLoader = () => {
    const instantLoader = document.getElementById('instant-loading');
    if (instantLoader) {
      instantLoader.classList.add('loading-hidden');
    }
  };

  // Phase 2: Load lazy images in background (after critical images loaded)
  useEffect(() => {
    if (lazyImages.length === 0) {
      setAllLoaded(true);
      return;
    }

    // Delay to prioritize rendering
    const timer = setTimeout(() => {
      let lazyLoadedCount = 0;
      const totalLazy = lazyImages.length;

      lazyImages.forEach((imgPath) => {
        const image = new Image();
        image.onload = image.onerror = () => {
          lazyLoadedCount++;
          if (lazyLoadedCount === totalLazy) {
            setAllLoaded(true);
          }
        };
        image.src = imgPath;
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [lazyImages]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 760);
      // Mobile landscape: small height and width > height
      setIsLandscape(height < 500 && width > height);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("orientationchange", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("orientationchange", checkScreenSize);
    };
  }, []);

  // Show rotate screen message for mobile landscape
  if (isLandscape) {
    return (
      <div className="rotate-screen-overlay">
        <motion.div
          className="rotate-screen-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="rotate-icon"
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18.01" />
            </svg>
          </motion.div>
          <h2 className="rotate-title">Rotate Your Device</h2>
          <p className="rotate-message">
            Please rotate your device to portrait mode for the best experience.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
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
          key="experience"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="education"
          id="experience"
        >
          <EducationSection />
        </motion.div>

        <motion.div
          key="projects"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="projects"
          id="projects"
        >
          <ProjectSection />
        </motion.div>

        <motion.div
          key="about"
          id="about"
          className="about-site"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
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