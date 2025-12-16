"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SkillChip from "../../components/SkillChip";
import languages from "../../database/skills/languages.json";
import frontend from "../../database/skills/frontend.json";
import backend from "../../database/skills/backend.json";
import database from "../../database/skills/database.json";
import tools from "../../database/skills/tools.json";
import "./AboutSection.css";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { IoIosMail } from "react-icons/io";

function Highlight({
  children,
  delay = 0,
  animate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  animate?: boolean;
}) {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <motion.span className="highlight" whileHover={{ rotate: -3, scale: 1.05 }}>
      {children}
      <span
        className={`highlight-underline ${animate && !animationDone ? "animate-underline" : ""}`}
        style={animate && !animationDone ? { animationDelay: `${delay}s` } : undefined}
        onAnimationEnd={() => setAnimationDone(true)}
      />
    </motion.span>
  );
}

const allSkills = [...languages, ...frontend, ...backend, ...database, ...tools];

function useInView(threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function AboutSection() {
  const aboutContent = useInView(0.3);
  const skillsContent = useInView(0.2);

  return (
    <div className="about">
      <div className="sub-heading">A Little More About Me</div>
      <div className="section-divider" />
      <div className="about-section" ref={aboutContent.ref}>
        <div className="about-image-section">
          <div className="about-tape-top"></div>
          <div className="about-tape-bottom"></div>
          <div className="about-polaroid">
            <img src="/about.jpeg" alt="Bart" draggable={false} />
            <span className="scribble-font">
              me & a friend
              <span className="scribble-font polaroid-date">Nara, 2025</span>
            </span>
          </div>
        </div>
        <div className="about-content">
          <p className="about-text">
            I'm Bart, a <Highlight delay={0} animate={aboutContent.isVisible}>first-gen</Highlight> student from{" "}
            <Highlight delay={0.1} animate={aboutContent.isVisible}>Thailand</Highlight> studying Computer
            Science at Northeastern University based in Boston, USA.
          </p>
          <p className="about-text">
            I love the craft of design—whether that's{" "}
            <Highlight delay={0.2} animate={aboutContent.isVisible}>UI/UX</Highlight>,{" "}
            <Highlight delay={0.3} animate={aboutContent.isVisible}>systems</Highlight>, or{" "}
            <Highlight delay={0.4} animate={aboutContent.isVisible}>infrastructure</Highlight>
            —and building things that feel as good as they work.
          </p>
          <p className="about-text">
            Outside of that, you'll find me watching VTubers, going on long
            runs, playing Plonkstars, or perfecting my omurice.
          </p>
          <p className="about-text thanks">
            Thanks for stopping by! I'd love to connect.
          </p>
        </div>
      </div>

      <div className="about-skills" id="about-skills" ref={skillsContent.ref}>
        <h3 className="about-skills-heading">Technologies I Work With</h3>
        <div className="about-skills-grid">
          {allSkills.map((tech, index) => (
            <SkillChip
              name={tech.name}
              icon={tech.icon}
              index={index}
              key={tech.name}
              animate={skillsContent.isVisible}
            />
          ))}
        </div>
      </div>

      <div className="section-divider" />

      <div className="about-footer">
        <span>Jirath "Bart" Lojanarungsiri</span>
        <span className="footer-divider">•</span>
        <a
          href="mailto:jlojanarungsiri@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail />jlojanarungsiri@gmail.com
        </a>
        <span className="footer-divider">•</span>
        <a
          href="https://www.linkedin.com/in/jlojanarungsiri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaLinkedin />LinkedIn
        </a>
        <span className="footer-divider">•</span>
        <a
          href="https://www.github.com/Bartavius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaGithub />GitHub
        </a>
        <span className="footer-divider">•</span>
        <a
          href="https://github.com/Bartavius/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Source Code</u>
        </a>
        <span className="footer-divider">•</span>
        <span>Updated {process.env.LAST_COMMIT_DATE}</span>
      </div>
    </div>
  );
}