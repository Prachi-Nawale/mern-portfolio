import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CertificateList.css";

const certificateImages = {
  "Programming in Java": "/assets/certificates/java.png",
  "Java Full Stack Developer Virtual Internship": "/assets/certificates/JavaFullStack.png",
  "Oracle Cloud Infrastructure Certified AI Professional": "/assets/certificates/OracleAI.png",
  "Google Cybersecurity Professional Certificate": "/assets/certificates/Cybersecurity.png",
};

function CertificateList() {
  const [certificates, setCertificates] = useState([]);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/certificates");
      setCertificates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const handleClosePopup = () => {
    setActiveCert(null);
  };

  return (
    <section className="cert-section">
      <div className="cert-glow purple" />
      <div className="cert-glow green" />

      <h2 className="cert-title gradient-text">Certifications</h2>
      <p className="cert-subtitle">
        Industry-recognized credentials validating my technical expertise
      </p>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div
            key={cert._id}
            className="cert-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="cert-image-wrapper"
              onClick={() => setActiveCert(cert)}
            >
              <img src={certificateImages[cert.title]} alt={cert.title} />
            </div>

            <div className="cert-info">
              <h4>{cert.title}</h4>
              <span>{cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>

      {activeCert && (
        <div className="cert-popup-overlay" onClick={handleClosePopup}>
          <div
            className="cert-popup"
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            <button className="close-btn" onClick={handleClosePopup}>
              ✖
            </button>
            <img
              src={certificateImages[activeCert.title]}
              alt={activeCert.title}
            />
            <h2>{activeCert.title}</h2>
            <p><strong>Issuer:</strong> {activeCert.issuer}</p>
            {activeCert.date && <p><strong>Date:</strong> {activeCert.date}</p>}
            <p>{activeCert.description}</p>
            <div className="skill-tags">
              {activeCert.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateList;
