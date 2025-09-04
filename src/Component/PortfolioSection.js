import React from "react";
import "../Styles/Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "A robust e-commerce solution with real-time inventory, payment gateway integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Healthcare Web Application",
      category: "Web Development",
      description:
        "AI-powered platform with patient interaction, predictive diagnostics, and doctor dashboard.",
      tech: ["React", "Python", "Machine Learning", "Node.js"],
    },
    {
      title: "Fee Voucher Portal",
      category: "Education Tech",
      description:
        "Automated fee generation system with print/export options and secure student management.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "Technova Technology Website",
      category: "Corporate Website",
      description:
        "Responsive and modern business site with service showcase and contact integration.",
      tech: ["React", "SCSS", "Framer Motion"],
    },
    {
      title: "E-learning Platform",
      category: "Learning Management",
      description:
        "Interactive LMS with quizzes, course progress tracking, and video support.",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      title: "School Management System",
      category: "Admin Portal",
      description:
        "Full-featured system for attendance, exams, reports, and staff/parent communication.",
      tech: ["PHP", "CodeIgniter", "MySQL"],
    },
    {
      title: "Chatrix",
      category: "Real-Time App",
      description:
        "A chat application with group chats, media sharing, and live updates.",
      tech: ["React", "Socket.IO", "Node.js", "MongoDB"],
    },
    {
      title: "Time Craft",
      category: "Productivity Tool",
      description:
        "Modern task and time management tool with calendar integration and notifications.",
      tech: ["Vue.js", "Firebase", "Moment.js"],
    },
    {
      title: "Time Watches Project",
      category: "E-Commerce",
      description:
        "Online store for a luxury watch brand with product filtering, cart, and checkout.",
      tech: ["React", "Tailwind", "Stripe", "Redux Toolkit"],
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore a selection of the digital products we've designed and
            developed across various domains.
          </p>
        </motion.div>

        <motion.div
          className="row g-4"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {projects.map((item, index) => (
            <div key={index} className="col-md-6">
              <motion.div
                className="card h-100 shadow-sm border-0"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="card-body">
                  <p className="text-muted small mb-1">{item.category}</p>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="mt-3 d-flex flex-wrap gap-2">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="badge bg-light text-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
