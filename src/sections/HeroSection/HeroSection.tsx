import "./HeroSection.css";
import ImageSection from "./ImageSection";
import ProfileInformation from "./ProfileInformation";

export default function HeroSection({setSkills, modal} : {setSkills: (val: boolean) => void, modal: boolean}) {
  return (
    <div className="hero-section grid grid-cols-2">
      <div><ProfileInformation setSkills={setSkills} modal={modal}/></div>
      <div><ImageSection /></div>
    </div>
  );
}
