
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather updates using the OpenWeather API.",
    tech: "React, LocalStorage",
    github: "https://github.com/Dasarad007/Weather-App",
    live: "https://react-js-grr8.vercel.app/",
  },
  {
    title: "E-Commerce App",
    desc: "Responsive e-commerce platform with cart and product management.",
    tech: "React, LocalStorage",
    github: "https://github.com/Dasarad007/ecommerce",
    live: "https://ecommerce-bhbs.vercel.app/",
  },
  {
    title: "Food Store App",
    desc: "Add to cart, remove items, and notifications with modern UI.",
    tech: "React, LocalStorage",
    github: "https://github.com/Dasarad007/food-project",
    live: "https://food-project-395i.vercel.app/",
  },
  {
    title: "Programiz App",
    desc: "React Router-based learning interface with clean navigation.",
    tech: "React, Router",
    github: "https://github.com/Dasarad007/PROGRAMIZ",
    live: "https://programiz-cofx.vercel.app/",
  },
  {
    title: "CRUD App",
    desc: "Full CRUD functionality using React, Node.js, Express & MongoDB.",
    tech: "MERN Stack",
    github: "https://github.com/Dasarad007/CRUD",
    live: "https://crud-ueps.onrender.com",
  },
  {
    title: "REST API",
    desc: "RESTful API for books and products built with Express & MongoDB.",
    tech: "Node.js, Express, MongoDB",
    github: "https://github.com/Dasarad007/REST",
    live: "https://rest-4-cltv.onrender.com",
  },
  {
    title: "Register/Login System",
    desc: "JWT-based authentication with Bcrypt password hashing.",
    tech: "Node.js, Express, MongoDB, JWT",
    github: "https://github.com/Dasarad007/register-login",
    live: "https://register-login-n11q.onrender.com",
  },
];

export default function App() {
  return (
    <div className="portfolio-container">
      {/* ===== HEADER ===== */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="portfolio-header"
      >
        <div>
          <h1 className="portfolio-name">Dasarad Nagulapalli</h1>
          <p className="portfolio-role">Full-Stack Developer</p>
          <p className="portfolio-contact">
            Rajahmundry, Andhra Pradesh •{" "}
            <a href="mailto:ndasarad@gmail.com">dasarad02@gmail.com</a> •
            9985492934
          </p>
          <div className="portfolio-links">
            <a
              href="https://www.linkedin.com/in/dasarad"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Dasarad007"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.header>

      {/* ===== HERO SECTION ===== */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Crafting Modern, Scalable, and Performance-Driven Web Applications
        </h2>
        <p>
          I’m a dedicated Full-Stack Developer focused on delivering optimized,
          user-friendly, and visually appealing digital experiences using the
          MERN stack. My goal is to bridge elegant design with clean,
          maintainable code for real-world impact.
        </p>
      </motion.section>

      {/* ===== SKILLS SECTION ===== */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Technical Expertise</h3>
        <div className="skills-grid">
          {[
            {
              title: "Frontend",
              items: [
                "React.js • Redux • JavaScript (ES6+)",
                "Tailwind CSS • Bootstrap • Responsive Design",
                "UI Optimization & Accessibility",
              ],
            },
            {
              title: "Backend & Database",
              items: [
                "Node.js • Express.js • RESTful APIs",
                "MongoDB • Mongoose",
                "JWT Authentication • Bcrypt",
              ],
            },
            {
              title: "Tools & Deployment",
              items: [
                "Git • GitHub • VS Code",
                "Postman • Vercel • Render • Netlify",
                "Agile Development & Version Control",
              ],
            },
          ].map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ scale: 1.03 }}
              className="skill-card"
            >
              <h4>{cat.title}</h4>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== PROJECTS SECTION ===== */}
      <motion.section
        className="projects-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Highlighted Projects</h3>
        <div className="projects-grid">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CONTACT SECTION ===== */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:dasarad02@gmail.com">dasarad02@gmail.com</a>
        </p>
        <p>Phone: 9985492934</p>
        <p>Available for Full-Stack roles • Open to relocation</p>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © {new Date().getFullYear()} Dasarad Nagulapalli — Crafted with React,
        Tailwind CSS & Framer Motion
      </footer>
    </div>
  );
}