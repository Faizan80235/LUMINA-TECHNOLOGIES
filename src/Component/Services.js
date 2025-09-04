import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Service.css"
// Dummy icons, replace with your real icons or SVGs
const MobileIcon = () => <i className="bi bi-phone" style={{ fontSize: '2.5rem' }} />;
const ServerIcon = () => <i className="bi bi-server" style={{ fontSize: '2.5rem' }} />;
const CodeIcon = () => <i className="bi bi-code-slash" style={{ fontSize: '2.5rem' }} />;
const DesignIcon = () => <i className="bi bi-palette" style={{ fontSize: '2.5rem' }} />;

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

 const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      icon: <MobileIcon />,
      features: ["React Native & Flutter", "Native iOS & Android", "App Store Deployment", "Performance Optimization"],
      color: "#007bff"
    },
    {
      title: "Backend Development",
      description: "Robust, scalable server-side solutions that power your applications with reliability, security, and high performance.",
      icon: <ServerIcon />,
      features: ["Node.js & Python", "Cloud Architecture", "Database Design", "API Development"],
      color: "#28a745"
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and industry best practices.",
      icon: <CodeIcon />,
      features: ["React & Vue.js", "TypeScript", "Progressive Web Apps", "Responsive Design"],
      color: "#ffc107"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive functionality for optimal engagement.",
      icon: <DesignIcon />,
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      color: "#dc3545"
    }
  ];

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
export default Services