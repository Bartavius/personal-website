import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./HeroSection.css";
import { useRouter } from "next/navigation";
import { useAppSound } from "@/components/SoundProvider";

export default function ProfileInformation({
  setSkills,
  modal,
}: {
  setSkills: (val: boolean) => void;
  modal: boolean;
}) {
  const router = useRouter();
  const { playClick } = useAppSound();

  return (
    <div className="hero-profile">
      <div className="hero-details">
        <div className="title-plate">
          <span className="name">Jirath "Bart" Lojanarungsiri</span>
          <span className="title">Full-Stack Developer</span>
          <div className="location-based">
            <span className="location">
              Boston, USA | Bangkok, Thailand
            </span>
          </div>
        </div>
        <div className="detail-buttons">
          <div className="social-links">
            <a
              href="https://linkedin.com/in/jlojanarungsiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary" onClick={playClick}>
                <span className="text-primary">
                  <FaLinkedin className="social-icon" />
                  LinkedIn
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Bartavius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary" onClick={playClick}>
                <span className="text-primary">
                  <FaGithub className="social-icon" />
                  GitHub
                </span>
              </button>
            </a>
          </div>
          <div className="additional-links">
            {/* <button className="btn-secondary" onClick={() => setSkills(!modal)}> */}
            <button
              className="btn-secondary"
              onClick={() => {
                router.push("#about-skills");
                playClick();
              }}
            >
              <span className="text-secondary">Skills</span>
            </button>
            <a
              href="files/Jirath-Lojanarungsiri-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-secondary" onClick={playClick}>
                <span className="text-secondary">Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
