import "./ProjectSection.css";

export default function ProjectSection() {
  const projects = [
    { name: "PLONKSTARS", thumbnail: "/projects/plonkstars.png" }, // IMAGES / VIDEOS TO BE ADDED
    { name: "JAZA", thumbnail: "/projects/JAZA.png" },
    { name: "HIGH CARD", thumbnail: "/projects/HighCard.png" },
    { name: "KANBAS", thumbnail: "/projects/kanbas.png" },
    { name: "STOCK PORTFOLIO", thumbnail: "/pig.webp" },
  ];
  return (
    <div className="project-section">
      <div className="sub-heading">Projects</div>
      <div className="section-divider"></div>
      <div className="project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-thumbnail">
              <img
                src={project.thumbnail}
                alt="thumbnail"
                className="thumbnail"
              />
            </div>
            <div className="project-title">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
