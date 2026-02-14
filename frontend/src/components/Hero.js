import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const hero = document.querySelector(".hero-section");

    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      hero.style.setProperty("--x", `${x}px`);
      hero.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="hero-section">
      {/* BACKGROUND */}
      <div className="bg-grid"></div>
      <div className="bg-glow purple"></div>
      <div className="bg-glow green"></div>

      {/* MAIN */}
      <div className="hero-wrapper">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span>Prachi Nawale</span>
          </h1>

          <h2 className="hero-subtitle typing">
            MERN Stack Developer & Problem Solver
          </h2>

          <p className="hero-desc">
            I design and develop scalable, performant, and modern web
            applications using MongoDB, Express, React, and Node.js — focused on
            clean architecture and real-world solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">
              View Projects
            </a>
            <a href="#contact" className="hero-btn secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-tech">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* RIGHT AVATAR */}
        <div className="hero-avatar">
          <div className="avatar-glow"></div>
          <img src="/avtar.png" alt="Prachi Avatar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
