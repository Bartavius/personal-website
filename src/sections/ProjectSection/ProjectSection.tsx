import "./ProjectSection.css";

export default function ProjectSection() {
  const projects = [
    {
      name: "PLONKSTARS",
      description: "After finding out that Geoguessr required a subscription fee to play, my friends and I decided to recreate the game ourselves with zero production costs. So, introducing Plonkstars, a geolocating game inspired by Geoguessr. Explore through Google Streetview and find out where you are!",
      linkName: "Play",
      link: "https://plonkstars.vercel.app",
      thumbnail: "/projects/plonkstars.png",
      languages: [
        {name: "TypeScript", icon: <img src="logo/typescript.png" />},
        {name: "Python", icon: <img src="logo/python.png" />},
        {name: "HTML", icon: <img src="logo/html5.png" />},
        {name: "CSS", icon: <img src="logo/css.png" />},
      ],
      techstack: [
        {name: "React", icon: <img src="logo/react.png" />},
        {name: "NextJS", icon: <img src="logo/next.png" />},
        {name: "Flask", icon: <img src="logo/flask.png" />},
        {name: "PostgreSQL", icon: <img src="logo/postgresql.png" />},
        {name: "TailwindCSS", icon: <img src="logo/tailwind.png" />},
        {name: "Axios", icon: ""},
        {name: "Redux", icon: ""},
      ],
    },
    { name: "JAZA", 
      description: "J.A.Z.A. - Just A Zip Away is a web application where companies are able to place vehicle relocation bounties for roadtrip enthusiasts to take. Companies with their own vehicles will sometimes require to pay their workers or independent contractors to relocate their vehicles from one hub to another (especially car rental and trucking companies). These workers are paid large sums of more than 50$ / hr, and so we thought: if the companies could place relocation bounties that just covers for food and shelter, the companies would be able to save up on costs, and roadtrip enthusiasts would be able to take a vacation for free and not worry about the ride back.",
      linkName: "Devpost",
      link: "https://devpost.com/software/j-a-z-a-just-a-zip-away",
      thumbnail: "/projects/JAZA.png",
      languages: [
        {name: "TypeScript", icon: <img src="logo/typescript.png" />},
        {name: "Python", icon: <img src="logo/python.png" />},
        {name: "HTML", icon: <img src="logo/html5.png" />},
        {name: "CSS", icon: <img src="logo/css.png" />},
      ],
      techstack: [
        {name: "React", icon: <img src="logo/react.png" />},
        {name: "NextJS", icon: <img src="logo/next.png" />},
        {name: "Django", icon: <img src="logo/django.png" />},
        {name: "TailwindCSS", icon: <img src="logo/tailwind.png" />},
        {name: "Axios", icon: ""},
        {name: "Redux", icon: ""},
      ],
    },
    { name: "HIGH CARD", 
      description: "High Card is a credit card management platform that guarantees the user the best cashback reward per dollar spent for every purchasing category. Not only that, but it can also recommend the next card to get depending on the user's current rewards catalog and notify them of the cashback rewards they could've been missing out on. This project won Best Startup Potential at FinHacks 2025.",
      linkName: "Devpost",
      link: "https://devpost.com/software/high-card",
      thumbnail: "/projects/HighCard.png",
      languages: [
        {name: "TypeScript", icon: <img src="logo/typescript.png" />},
        {name: "JavaScript", icon: <img src="logo/javascript.png" />},
        {name: "Python", icon: <img src="logo/python.png" />},
        {name: "HTML", icon: <img src="logo/html5.png" />},
        {name: "CSS", icon: <img src="logo/css.png" />},
      ],
      techstack: [
        {name: "React", icon: <img src="logo/react.png" />},
        {name: "NextJS", icon: <img src="logo/next.png" />},
        {name: "NodeJS", icon: <img src="logo/nodejs.png" />},
        {name: "MongoDB", icon: <img src="logo/mongodb.png" />},
        {name: "TailwindCSS", icon: <img src="logo/tailwind.png" />}
      ],
    },
    { name: "KANBAS",
      description: "Kanbas is a recreation of the educational platform, Canvas. It supports course customizations, including the CRUD operations on courses, assignments, modules, and quizzes.",
      linkName: "Check it out!",
      link: "https://kanbas-mern.netlify.app",
      thumbnail: "/projects/kanbas.png",
      languages: [
        {name: "TypeScript", icon: <img src="logo/typescript.png" /> },
        {name: "JavaScript", icon: <img src="logo/javascript.png" />},
        {name: "HTML", icon: <img src="logo/html5.png" />},
        {name: "CSS", icon: <img src="logo/css.png" />},
      ],
      techstack: [
        {name: "React", icon: <img src="logo/react.png" />},
        {name: "NodeJS", icon: <img src="logo/nodejs.png" />},
        {name: "MongoDB", icon: <img src="logo/mongodb.png" />},
        {name: "ExressJS", icon: <img src="logo/express.png" />},
        {name: "BootstrapCSS", icon: <img src="logo/bootstrap.png" />},
        {name: "Axios", icon: ""},
        {name: "Redux", icon: ""},
      ],
     },
    { name: "STOCK PORTFOLIO", 
      description: "Written in pure Java, this project simulates stock market trades and allows the user to create (and maintain) stock portfolios with fixed percentages. It adopts an MVC architecture and has a 100% test coverage. The code is available upon request.",
      linkName: "Unavailable",
      link: "/",
      thumbnail: "/pig.webp",
      languages: [
        {name: "Java", icon: <img src="logo/java.png" />},
      ],
      techstack: [
        {name: "JUnit", icon: ""},
        {name: "JPane", icon: ""},
      ], 
    },
    // IMAGES / VIDEOS TO BE FINALIZED
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

            {/* PROJECT MODAL HERE */}
          </div>
        ))}
      </div>
    </div>
  );
}
