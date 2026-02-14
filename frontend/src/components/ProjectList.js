import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./ProjectList.css";

function ProjectList({ refresh }) {
  const [projects, setProjects] = useState([]);

  // EXTRA INFO FOR PROJECTS (PORTFOLIO REMOVED ✅)
  const projectInfo = {
    "Deepfake Audio Detection": {
      status: "Working",
      year: "Dec 2025 – Present",
    },
    "Agriculture Management System": {
      status: "Completed",
      year: "Dec 2024 – Jan 2025",
    },
    "IoT-based Crowd Management System": {
      status: "Completed",
      year: "Jun 2024 – Jul 2024",
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, [refresh]);

  return (
    <section className="projects-section">
      {/* TITLE */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="svg-icon">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#ff6ec4" />
                <stop offset="25%" stopColor="#7873f5" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="75%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#ff6ec4" />
              </linearGradient>
            </defs>
            <path
              d="M12 2C8 6 7 9 7 11c0 1.1.9 2 2 2h1v4l2 2 2-2v-4h1c1.1 0 2-.9 2-2 0-2-1-5-5-9z"
              fill="url(#grad)"
            />
          </svg>
        </span>
        Projects
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        From learning to real-world implementation
      </motion.p>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {projects
          // ❌ REMOVE PORTFOLIO PROJECT SAFELY
          .filter(
            (project) => project.title !== "My First Portfolio Project"
          )
          .map((project, index) => {
            const info = projectInfo[project.title] || {};

            return (
              <motion.div
                className="project-card"
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="project-title">{project.title}</h3>

                {info.year && (
                  <span className="project-year">{info.year}</span>
                )}

                <p className="project-desc clamp">
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="links">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="live-btn"
                      >
                        Live
                      </a>
                    )}
                  </div>

                  {info.status && (
                    <span
                      className={`status ${
                        info.status === "Completed"
                          ? "done"
                          : "working"
                      }`}
                    >
                      {info.status}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}

export default ProjectList;
