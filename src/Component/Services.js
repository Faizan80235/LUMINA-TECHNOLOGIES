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

  // Unique portfolio projects
  const projects = [
    // MERN Projects
    {
      title: "SmartShop",
      category: "MERN E-Commerce",
      description: "Full-featured e-commerce web app with product search, cart, payments, and admin panel.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    },
    {
      title: "TaskFlow",
      category: "MERN Productivity Tool",
      description: "Kanban-style task manager with drag-and-drop, real-time collaboration, and notifications.",
      tech: ["React", "Redux", "Express", "MongoDB", "Socket.IO"],
    },
    {
      title: "MediConnect",
      category: "MERN Healthcare",
      description: "Doctor-patient booking platform with secure video consultations and e-prescriptions.",
      tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC"],
    },
    {
      title: "FoodieHub",
      category: "MERN Food Delivery",
      description: "Food ordering system with live order tracking, restaurant dashboard, and customer ratings.",
      tech: ["React", "Express", "MongoDB", "Node.js", "Google Maps API"],
    },
    {
      title: "EduPortal",
      category: "MERN LMS",
      description: "Learning platform with video courses, quizzes, and student progress tracking.",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Firebase"],
    },

    // AI/ML Projects
    {
      title: "VisionAI",
      category: "AI - Computer Vision",
      description: "Image recognition system for detecting objects, people, and products in real-time.",
      tech: ["Python", "TensorFlow", "OpenCV", "React"],
    },
    {
      title: "ChatGenie",
      category: "AI - NLP",
      description: "Smart chatbot for customer support with sentiment analysis and multilingual responses.",
      tech: ["Node.js", "Python", "NLTK", "React"],
    },
    {
      title: "PredictX",
      category: "AI - Predictive Analytics",
      description: "Sales forecasting platform powered by machine learning models and real-time dashboards.",
      tech: ["Python", "Pandas", "Scikit-learn", "React"],
    },
    {
      title: "VoiceMate",
      category: "AI - Speech Recognition",
      description: "Voice-to-text and command recognition app for productivity and accessibility.",
      tech: ["Python", "TensorFlow", "React Native", "Firebase"],
    },
    {
      title: "HealthAI",
      category: "AI - Healthcare",
      description: "AI model for early disease detection using medical images and patient data.",
      tech: ["Python", "Keras", "Flask", "MongoDB"],
    },

    // More Projects (IoT, Blockchain, etc.)
    {
      title: "BlockPay",
      category: "Blockchain",
      description: "Decentralized payment system with smart contracts and crypto wallet integration.",
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
    },
    {
      title: "SmartHome Hub",
      category: "IoT",
      description: "IoT-based home automation with real-time device monitoring and control.",
      tech: ["React", "MQTT", "Node.js", "Raspberry Pi"],
    },
    {
      title: "TravelGo",
      category: "Travel & Booking",
      description: "Travel booking platform with real-time flight/hotel search and booking engine.",
      tech: ["Next.js", "Node.js", "MongoDB", "GraphQL"],
    },
    {
      title: "AgriSense",
      category: "AI + IoT",
      description: "Smart agriculture solution with crop monitoring, irrigation alerts, and yield prediction.",
      tech: ["Python", "TensorFlow", "React", "IoT Sensors"],
    },
    {
      title: "StreamBox",
      category: "Media & Entertainment",
      description: "Video streaming app with subscription management and content recommendations.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Title */}
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

        {/* Projects Grid */}
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
