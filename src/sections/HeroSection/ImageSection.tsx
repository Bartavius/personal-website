"use client";
import { useEffect, useState } from "react";
import images from "../../database/ProfileImages.json";

export default function ImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profile, setProfile] = useState(images[currentIndex]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out first
      setOpacity(0);

      setTimeout(() => {
        // Change image after fade-out is complete
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProfile(images[(currentIndex + 1) % images.length]);

        // Fade in after small delay
        setOpacity(1);
      }, 1000); // Match this with the CSS transition time
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

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
