import { useEffect, useState } from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeMediumSharp } from "react-icons/io5";
import "./musicplayer.css";

const MusicPlayer = ({}) => {
  const [toggled, setToggled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePlay = () => {
    setPlaying(!playing);
  }

  useEffect(() => {
    const musicPlayer = document.querySelector(".music-container") as HTMLElement;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        musicPlayer.style.opacity = "1";
        musicPlayer.style.visibility = "visible";
      } else {
        musicPlayer.style.opacity = "0";
        musicPlayer.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="music-container">
      <div className="thumbnail">cover image</div>
      <div className="music-metadata">
        <div className="music-title">music title</div>
        <div className="music-artist">mustic artist</div>
      </div>
      <div className="music-controls">
        <div className="progress-bar">
          progress bar + time and duration; allow skip functionality
        </div>
        <div className="control-buttons">
          control buttons
          <button className="resume" onClick={() => handlePlay}>
            {playing ? <IoVolumeMediumSharp /> : <IoVolumeMute />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
