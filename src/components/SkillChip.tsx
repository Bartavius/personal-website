"use client";
import { motion } from "framer-motion";
import "./SkillChip.css";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.02,
      ease: "easeOut",
    },
  }),
};

export default function SkillChip({
  name,
  icon,
  index = 0,
  animate = false,
}: {
  name: string;
  icon: string;
  index?: number;
  animate?: boolean;
}) {
  return (
    <motion.div
      className="skill-icon-wrapper"
      variants={itemVariants}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      custom={index}
    >
      <div className="skill-icon">
        {icon ? (
          <img src={icon} alt={name} />
        ) : (
          <span className="skill-icon-fallback">{name.charAt(0)}</span>
        )}
      </div>
      <span className="skill-icon-label">{name}</span>
    </motion.div>
  );
}