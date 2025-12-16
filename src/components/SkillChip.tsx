"use client";
import { motion } from "framer-motion";
import "./SkillChip.css";

export default function SkillChip({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon: string;
  index?: number;
}) {
  return (
    <motion.div
      className="skill-icon-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.02,
        ease: "easeOut",
      }}
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