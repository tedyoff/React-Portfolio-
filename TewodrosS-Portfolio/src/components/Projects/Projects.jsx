import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const githubUser = "tedyoff";
  

  const projects = [
    {
  name: "E-commerce App",
  desc: "Full-stack React + Node.js + MySQL e-commerce application with product management, cart system, checkout, and payment gateway integration.",
  tech: ["React", "Node.js", "MySQL", "Stripe"],
  link: "https://ecommerce-crud-api-integration-fullstack-qirs-bc8s5t5a6.vercel.app/",
  github: `https://github.com/tedyoff/ecommerce_CRUD_Api_integration_fullstack`,
  image: "https://www.thedigitalenterprise.com/wp-content/uploads/2019/03/Building-Mobile-E-Commerce-App-%E2%80%93-A-Complete-Handbook.jpg",
},

  {
  name: "Chat Application",
  desc: "Real-time chat app with WebSocket and JWT authentication.",
  tech: ["React", "Express", "Socket.io"],
  link: "https://chat-application-nb7e.vercel.app/",
  github: "https://github.com/tedyoff/Chat-Application",
  image: "public/images/chatapp.jpg",
},

    {
      name: "Student Attendance Tracker",
      desc: "App to track student attendance with secure login and data visualization.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      link: "https://student-attendance-tracker-mocha-three.vercel.app/",
      github: `https://github.com/tedyoff/student-attendance-tracker`,
      image: "public/images/attendance.jpg",
    },
    {
      name: "Portfolio Website",
      desc: "Personal portfolio built with React, Framer Motion, and modern UI design.",
      tech: ["React", "Framer Motion", "CSS"],
      link: "https://your-portfolio-demo.com",
      github: `https://github.com/tedyoff/Tewodros-Portofolio-using_HTML-CSS-JS`,
      image: "public/images/portfolio1.jpg",
    },
    {
      name: "Blog Platform",
      desc: "Full-stack blogging platform with markdown support and authentication.",
      tech: ["Next.js", "MongoDB", "JWT"],
      link: "https://your-blog-demo.com",
      github: `https://github.com/${githubUser}/blog-platform`,
      image: "public/images/blog.jpg",
    },
    {
      name: "Task Manager",
      desc: "Productivity app with drag-and-drop task organization.",
      tech: ["React", "Redux", "Firebase"],
      link: "https://your-taskmanager-demo.com",
      github: `https://github.com/${githubUser}/task-manager`,
      image: "public/images/taskmanager.jpg",
    },
    {
      name: "Weather Dashboard",
      desc: "Weather app fetching live data with geolocation support.",
      tech: ["React", "OpenWeather API", "TailwindCSS"],
      link: "https://your-weather-demo.com",
      github: `https://github.com/${githubUser}/weather-dashboard`,
      image: "public/images/weather.jpg",
    },
    {
    name: "Amazon Frontend Clone",
    desc: "A pixel-perfect Amazon clone frontend built with React, styled components, and responsive UI design.",
    tech: ["React", "CSS", "Context API"],
    link: "https://amazon-frontend-clone.vercel.app/", 
    github: "https://github.com/tedyoff/amazon-frontend-clone", 
    image: "public/images/Amazon.jpg",
  },
  {
      name: "EventHub – Event Discovery & Booking Platform",
      desc: "A responsive web application for discovering and booking events. Users can browse upcoming events, view details, book tickets via EmailJS integration, and stay updated with their favorite events.",
      tech: ["HTML5", "CSS", "Bootstrap", "JavaScript", "EmailJS", "Responsive Design"],
      link: "https://eventhub-final-project.vercel.app/",
      github: `https://github.com/tedyoff/Eventhub-final-project`,
      image: "public/images/storefront.jpg",
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>

            <div className="tech-list">
              {p.tech.map((t, j) => (
                <span key={j} className="tech">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer">🔗 Live Demo</a>
              <a href={p.github} target="_blank" rel="noreferrer">💻 GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
