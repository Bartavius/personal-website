'use client';
import { useEffect, useState } from "react";
import images from "../../database/ProfileImages.json";

export default function ImageSection() {
    const [profile, setProfile] = useState(images[Math.floor(Math.random() * images.length)]);
    useEffect(() => {
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * images.length);
          setProfile(images[randomIndex]);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
return (
    <div className="image-section">
        <div className="circles">
            <img src={profile.image} alt="" />
            <span className="scribble-font">{profile.caption}</span>
            <span className="scribble-font polaroid-date">{profile.date}</span>
        </div>
    </div>
)
}