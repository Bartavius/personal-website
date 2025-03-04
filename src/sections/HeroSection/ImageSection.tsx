'use client';
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

export default function ImageSection() {
    const [profile, setProfile] = useState(images[Math.floor(Math.random() * images.length)]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const shuffledImages = shuffleArray(images);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex + 1 < shuffledImages.length) setCurrentIndex(currentIndex + 1);
            else setCurrentIndex(0);
            setProfile(shuffledImages[currentIndex]);
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex, shuffledImages]);

    return (
        <div className="image-section" style={{ rotate: `${profile.deg}deg` }}>
            <div className="circles">
                <img src={profile.image} alt="" draggable={false} />
                <span className="scribble-font">{profile.caption}</span>
                <span className="scribble-font polaroid-date">{profile.date}</span>
            </div>
        </div>
    );
}
