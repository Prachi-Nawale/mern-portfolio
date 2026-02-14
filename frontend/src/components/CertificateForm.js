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
  const [expandedId, setExpandedId] = useState(null);

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

  return (
    <section className="cert-section">
      <div className="cert-glow purple" />
      <div className="cert-glow green" />

      <h2 className="cert-title gradient-text">Certifications</h2>
      <p className="cert-subtitle">
        Industry-recognized credentials validating my technical expertise
      </p>

      <div className={`cert-grid ${expandedId ? "blurred" : ""}`}>
        {certificates.map((cert) => {
          const isExpanded = expandedId === cert._id;

          return (
            <div
              key={cert._id}
              className={`cert-card ${isExpanded ? "expanded" : ""}`}
              onClick={() => setExpandedId(cert._id)}
            >
              <div className="cert-image-wrapper">
                <img
                  src={certificateImages[cert.title]}
                  alt={cert.title}
                />
              </div>

              <div className="cert-info">
                <h4>{cert.title}</h4>
                <span>{cert.issuer}</span>
              </div>

              {isExpanded && (
                <div className="expanded-content">
                  <p className="desc">{cert.description}</p>

                  <div className="skill-tags">
                    {cert.skills.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>

                  <button
                    className="collapse-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(null);
                    }}
                  >
                    ✖ Close
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CertificateList;
