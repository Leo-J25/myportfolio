import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application that fetches real-time data using OpenWeatherMap API. Displays temperature, weather conditions, and icons based on user input location.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://weather-app-4pxd-c37rfrb0t-leos-projects-e9ff0897.vercel.app/",
    githubLink: "https://github.com/Leo-J25/weather-app",
    image: "/Assets/weather-app.png",
  },
  {
    title: "IP Address Checker",
    description:
      "",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://ip-address-checker-tau.vercel.app/",
    githubLink: "https://github.com/Leo-J25/ip_address_checker",
    image: "/Assets/ip.png",
  },
  {
    title: "Tasty Foods Ad",
    description:
      "A creative and animated Spider-Man-themed character card built using only HTML and CSS. My very first hands-on project showcasing layout and styling skills.",
    tech: ["HTML", "CSS"],
    demoLink: "https://tasty-foods-ad.vercel.app/",
    githubLink: "https://github.com/Leo-J25/tasty_foods_ad",
    image: "/Assets/ad.png",
  },
  {
    title: "Todo List",
    description:
      "A simple and clean task manager to add and track daily tasks. Supports adding, deleting, and organizing your to-dos using React state management.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://to-do-list-mu-inky.vercel.app/",
    githubLink: "https://github.com/Moses-beniyel/TO-DO-LIST/",
    image: "/Assets/todoList.png",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A classic Tic-Tac-Toe game built using React. Features dynamic game board, move tracking, and reset functionality with modern UI styling.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://tic-tac-toe-chzk.vercel.app/",
    githubLink: "https://github.com/Moses-beniyel/tic-tac-toe/",
    image: "/Assets/tic-tac-toe.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Keep the animation only here if desired */}
      <h2 className="section-title block">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
