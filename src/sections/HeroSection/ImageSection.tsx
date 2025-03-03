'use client';
import images from "./ProfileImages.json";

export default function ImageSection() {
    const profile = images[Math.floor(Math.random() * images.length)];
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