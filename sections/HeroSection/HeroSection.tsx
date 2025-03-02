import Darkmode from "../../components/darkmode";
import Navbar from "../../components/navbar";
import "./HeroSection.css";
import ImageSection from "./ImageSection";
import ProfileInformation from "./ProfileInformation";

export default function HeroSection() {
  return (
    <div className="hero-section grid grid-cols-2">
      <div><ProfileInformation /></div>
      <div><ImageSection /></div>
    </div>
  );
}
