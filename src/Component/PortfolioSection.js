import React from "react";
import "../Styles/Portfolio.css";
import { motion } from "framer-motion";
import Image from "../Images/image.png";
import care from "../Images/new.png"
import ecom from "../Images/ecom.png"
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

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Complete e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: Image, // imported image
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
   {
  title: "Healthcare Web Application",
  category: "Web Development",
  description:
    "AI-powered healthcare application with media assistance, machine learning for predictive diagnostics, and secure real-time communication. Built with modern stacks for scalability and performance.",
  image: care, 
  tech: ["React", "Python", "Machine Learning", "AI", "Node.js"],
},

  {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Complete e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: ecom, // imported image
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
   
  ];

  return (
    <div>
      {/* Portfolio Section */}
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
              Explore our portfolio of successful projects that showcase our
              expertise across various industries and technologies. Each project
              represents our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            className="row g-4"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {portfolio.map((item, index) => (
              <div key={index} className="col-lg-6">
                <motion.div
                  className="portfolio-item h-100 card shadow-sm rounded overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Cover image */}
                  <div className="portfolio-cover">
                    {typeof item.image === "string" && item.image.length <= 4 ? (
                      <div className="emoji-cover">{item.image}</div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid w-100"
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="portfolio-content p-3">
                    <div className="portfolio-category text-muted small mb-2">
                      {item.category}
                    </div>
                    <h4 className="portfolio-title">{item.title}</h4>
                    <p className="portfolio-description">{item.description}</p>
                    <div className="tech-stack mt-2 d-flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag badge bg-light text-dark">
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
    </div>
  );
};

export default Portfolio;
