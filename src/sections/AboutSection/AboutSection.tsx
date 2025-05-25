import "./AboutSection.css";

export default function AboutSection() {
    return (
        <div className="about">
            <div className="sub-heading">About this site</div>
            <div className="section-divider" />
        <div className="about-section">
            
            <div className="text-description">
                This website was designed in <span className="pink"><b>Figma</b></span> and recreated using 
                <span className="blue"><b> React</b></span>, <span className="orange"><b>Next.js</b></span>, and pure <span className="yellow"><b>CSS</b></span>. You see, I
                realized halfway through building the website that I hadn't installed tailwind (which makes sense why my grids weren't working).
                So, I decided to commit and write all the CSS myself. For something that I designed and built around a little over a day, I am very proud of how it turned out. Thanks for checking my work out all the way to the end!
            </div>
            <br />
            <div className="text-description">
                - Bart L. | <a href="https://github.com/Bartavius/personal-website" target="_blank" className="text-description">Github Repository</a> | Last Updated: May 25th, 2025
            </div>
        </div></div>
    )
}