import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Service.css";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" },
  transition: { type: "spring", stiffness: 300 }
};

// Service categories (expandable to 150+)
const serviceCategories = {
  "Software Development": [
    "Custom Software Development",
    "Mobile App Development",
    "Web App Development",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "API Development",
    "Progressive Web Apps",
    "Microservices Architecture",
    "Cross-Platform Development"
    // ➝ add ~30+ more
  ],
  "Cloud & DevOps": [
    "Cloud Migration",
    "AWS Solutions",
    "Azure Solutions",
    "Google Cloud Solutions",
    "Serverless Computing",
    "DevOps Consulting",
    "CI/CD Pipelines",
    "Infrastructure as Code",
    "Containerization with Docker",
    "Kubernetes Management"
    // ➝ add ~20+ more
  ],
  "AI & Machine Learning": [
    "Predictive Analytics",
    "Natural Language Processing",
    "Computer Vision",
    "Recommendation Engines",
    "Chatbot Development",
    "Fraud Detection Systems",
    "AI Model Deployment",
    "Deep Learning Solutions",
    "Data Science Consulting",
    "Voice Recognition"
    // ➝ add ~20+ more
  ],

 
};

// Flatten categories into services array
const services = Object.entries(serviceCategories).flatMap(([category, items]) =>
  items.map((title, idx) => ({
    title,
    description: `${title} tailored to meet your business needs with scalability, performance, and innovation.`,
    icon: <i className="bi bi-lightning-charge" style={{ fontSize: '2.5rem' }} />,
    features: ["Expert Consultation", "Best Practices", "Scalable Solutions", "Ongoing Support"],
    color: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1", "#20c997"][idx % 6]
  }))
);

const Services = () => {
  return (
    <section id="services" className="section py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title fw-bold">Our Services</h2>
          <p className="section-subtitle text-muted">
            We offer comprehensive digital solutions to help your business thrive in the modern world. From concept to deployment, we're your trusted technology partner.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          className="row g-4"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <motion.div
                variants={fadeInUp}
                {...scaleOnHover}
                className="h-100"
              >
                <div className="card shadow-sm rounded-4 h-100 border-0">
                  <div className="card-body d-flex flex-column">
                    <div
                      className="mb-3"
                      style={{ color: service.color, fontSize: '3rem', lineHeight: 1 }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text flex-grow-1 text-muted" style={{ fontSize: '0.95rem' }}>
                      {service.description}
                    </p>
                    <ul className="list-unstyled mt-3 mb-0">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Services;
