"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import EducationSection from "../sections/EducationSection/EducationSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import Skills from "../components/SkillsModal";
import Contacts from "@/components/Contacts";
import AboutSection from "@/sections/AboutSection/AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import imageConfig from "../database/images.json";

export default function Home() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Two-tier loading states
  const [criticalLoaded, setCriticalLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Get images from config
  const criticalImages = imageConfig.critical;
  const lazyImages = imageConfig.lazy;

  // Hide the CSS loading overlay once React is ready
  useEffect(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
      overlay.classList.add('loading-hidden');
    }
  }, []);

  // Phase 1: Load critical images (blocks site access)
  useEffect(() => {
    if (criticalImages.length === 0) {
      setCriticalLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalCritical = criticalImages.length;
    let hasTimedOut = false;

    // Safety timeout: grant access after 10 seconds regardless
    const timeoutId = setTimeout(() => {
      if (!hasTimedOut) {
        hasTimedOut = true;
        console.warn('Loading timeout reached - granting site access');
        setCriticalLoaded(true);
      }
    }, 10000);

    criticalImages.forEach((imgPath) => {
      const image = new Image();
      image.onload = image.onerror = () => {
        if (hasTimedOut) return; // Don't update state if already timed out
        
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalCritical) * 100));
        
        if (loadedCount === totalCritical) {
          clearTimeout(timeoutId);
          // Small delay for smooth transition
          setTimeout(() => {
            setCriticalLoaded(true);
          }, 300);
        }
      };
      image.src = imgPath;
    });

    return () => clearTimeout(timeoutId);
  }, []);

  // Phase 2: Load lazy images in background (after site access)
  useEffect(() => {
    if (!criticalLoaded || lazyImages.length === 0) {
      if (criticalLoaded && lazyImages.length === 0) {
        setAllLoaded(true);
      }
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
  }, [criticalLoaded]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Loading screen - blocks until critical images loaded
  if (!criticalLoaded) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#424874",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <motion.h2
              style={{
                color: "#F4EEFF",
                fontSize: "2.5rem",
                fontWeight: 800,
                margin: 0,
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                letterSpacing: "0.5px",
              }}
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading Portfolio
            </motion.h2>

            {/* Progress Bar Container */}
            <div
              style={{
                width: "min(400px, 80vw)",
                backgroundColor: "#A6B1E1",
                borderRadius: "50px",
                overflow: "hidden",
                height: "12px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                position: "relative",
              }}
            >
              {/* Progress Bar Fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  height: "100%",
                  backgroundColor: "#DCD6F7",
                  borderRadius: "50px",
                  boxShadow: "0px 0px 10px rgba(220, 214, 247, 0.5)",
                }}
              />
              
              {/* Animated shimmer effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(244, 238, 255, 0.4), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              style={{
                color: "#DCD6F7",
                fontSize: "1.25rem",
                fontWeight: 600,
                margin: 0,
                fontFamily: "Outfit, sans-serif",
              }}
              key={loadingProgress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {loadingProgress}%
            </motion.p>

            {/* Loading dots animation */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "1rem",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#F4EEFF",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
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