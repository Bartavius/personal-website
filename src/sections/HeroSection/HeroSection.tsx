import { motion } from "framer-motion";
import "./HeroSection.css";
import ImageSection from "./ImageSection";
import ProfileInformation from "./ProfileInformation";

export default function HeroSection({
  setSkills,
  modal,
}: {
  setSkills: (val: boolean) => void;
  modal: boolean;
}) {
  return (
    <div key={"hero-section"} className="hero-section">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5}}>
        <ProfileInformation setSkills={setSkills} modal={modal} />
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}>
        <ImageSection />
      </motion.div>
    </div>
  );
}
