import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // FaPhone removed
import "./Contact.css";

const contacts = [
  {
    icon: <FaEnvelope />,
    value: "prachinawale04@gmail.com",
    link: "mailto:prachinawale04@gmail.com",
    type: "mail",
  },
  {
    icon: <FaLinkedin />,
    value: "LinkedIn",
    link: "https://www.linkedin.com/in/prachi-nawale-53a45028b",
    type: "linkedin",
  },
  {
    icon: <FaGithub />,
    value: "GitHub",
    link: "https://github.com/Prachi-Nawale",
    type: "github",
  },
  {
    icon: <FaEnvelope />,
    value: "Send Message",
    link: "#",
    type: "form",
  },
];

function Contact() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(600px) rotateY(${x / 15}deg) rotateX(${-y / 15}deg) translateY(-8px) scale(1.02)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://mern-portfolio-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setShowForm(false);
        form.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-grid">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target={contact.type !== "form" ? "_blank" : undefined}
            rel="noreferrer"
            className="contact-card tilt"
            onClick={(e) => {
              if (contact.type === "form") {
                e.preventDefault();
                setShowForm(true);
              }
            }}
          >
            <span className={`contact-icon ${contact.type}`}>
              {contact.icon}
            </span>
            <span className="contact-text">{contact.value}</span>
          </a>
        ))}
      </div>

      {/* Resume Download Button */}
      <div className="resume-download">
        <a
          href="/resume.pdf"
          download="Prachi_Nawale_Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>

      {showForm && (
        <div className="contact-modal">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Message</h3>

            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <div className="form-actions">
              <button type="submit">Send</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;
