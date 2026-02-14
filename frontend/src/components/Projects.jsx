import React from "react";
import "./Projects.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Soil Health Monitoring System",
    emoji: "🌱",
    desc: "IoT-based system to monitor soil parameters with real-time dashboard and alerts.",
    tech: ["React", "Node.js", "MongoDB", "Express", "IoT"],
    github: "#",
    live: "#",
    status: "Completed",
  },
  {
    title: "AI Crop Supply Chain Optimization",
    emoji: "🚜",
    desc: "AI-powered platform to optimize crop distribution and reduce wastage.",
    tech: ["React", "Python", "ML", "MongoDB"],
    github: "#",
    live: "#",
    status: "Working",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        🚀 My Projects
      </motion.h2>

      <p className="section-subtitle">
        Real-world projects combining IoT, AI & Web Technologies
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.05}
              transitionSpeed={800}
            >
              <div className="project-card">
                <h3 className="project-title">
                  <span className="emoji">{p.emoji}</span> {p.title}
                </h3>

                <p className="project-desc">{p.desc}</p>

                <div className="tech-stack">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span
                    className={`status ${
                      p.status === "Completed" ? "done" : "working"
                    }`}
                  >
                    {p.status}
                  </span>

                  <div className="links">
                    <a href={p.github} className="github-btn">
                      <FaGithub /> GitHub
                    </a>
                    <a href={p.live} className="live-btn">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
