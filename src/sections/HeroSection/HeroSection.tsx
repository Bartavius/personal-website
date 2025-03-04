import { motion } from "framer-motion";
import "./HeroSection.css";
import ImageSection from "./ImageSection";
import ProfileInformation from "./ProfileInformation";

export default function HeroSection({setSkills, modal} : {setSkills: (val: boolean) => void, modal: boolean}) {
  return (
    <motion.div 
            key={"hero-section"}
            className="hero-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
      <div><ProfileInformation setSkills={setSkills} modal={modal}/></div>
      <div><ImageSection /></div>
    </motion.div>
  );
}
