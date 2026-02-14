import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript } from "react-icons/si";
import "./Skills.css";

const skillGroups = [
  {
    title: "💻 Frontend",
    color: "#60a5fa",
    skills: [
      { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34f26" }} /> },
      { name: "CSS3", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
      { name: "JavaScript", icon: <SiJavascript style={{ color: "#f7df1e" }} /> },
      { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
    ],
  },
  {
    title: "⚙️ Backend",
    color: "#4ade80",
    skills: [
      { name: "Node.js", icon: <FaNodeJs style={{ color: "#3c873a" }} /> },
      { name: "MongoDB", icon: <SiMongodb style={{ color: "#4db33d" }} /> },
      { name: "MySQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
    ],
  },
  {
    title: "🛠️ Tools",
    color: "#c084fc",
    skills: [
      { name: "Git", icon: <FaGitAlt style={{ color: "#f05032" }} /> },
      { name: "GitHub", icon: <FaGithub style={{ color: "#9ca3af" }} /> },
    ],
  },
  {
    title: "🌐 Languages",
    color: "#fde047",
    skills: [
      { name: "C Core", icon: "🧠" },
      { name: "Core Java", icon: "☕" },
      { name: "Core Python", icon: "🐼" },
    ],
  },
  {
    title: "🎯 Other Skills",
    color: "#fb7185",
    skills: [{ name: "Japanese (Beginner)", icon: "🎌" }],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-glow purple" />
      <div className="skills-glow green" />

      <motion.h2
        className="skills-title gradient-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <p className="skills-subtitle">
        Technologies and skills I use to design, build, and grow digital solutions
      </p>

      <div className="skills-groups">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            style={{ color: group.color }}
          >
            <h3>{group.title}</h3>

            <div className="skill-icons">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-icon"
                  style={{ color: group.color }}
                >
                  {skill.icon} <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
