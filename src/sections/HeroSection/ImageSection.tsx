"use client";
import { useEffect, useState } from "react";
import images from "../../database/ProfileImages.json";

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
const shuffledImages = shuffleArray(images);

export default function ImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profile, setProfile] = useState(shuffledImages[currentIndex]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out first
      setOpacity(0);

      setTimeout(() => {
        // Change image after fade-out is complete
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
        setProfile(shuffledImages[(currentIndex + 1) % shuffledImages.length]);

        // Fade in after small delay
        setOpacity(1);
      }, 1000); // Match this with the CSS transition time
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, shuffledImages]);

  return (
    <div className="image-section">
      <div className="tape-top"></div>
      <div className="tape-bottom"></div>
      <div className="circles">
        <img src={profile.image} alt="" draggable={false} style={{ opacity }} />
        <span className="scribble-font" style={{ opacity }}>
          {profile.caption}
          <span className="scribble-font polaroid-date" style={{ opacity }}>
          {profile.date}
        </span>
        </span>
        
      </div>
    </div>
  );
}
