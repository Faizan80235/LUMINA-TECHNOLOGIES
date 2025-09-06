import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css"; // Your custom styles if any

const About = () => {
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

  const values = [
    {
      icon: "🎯",
      title: "Quality Focus",
      description:
        "We never compromise on quality and attention to detail. Every line of code, every design element is crafted with precision and care.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and trends. We continuously evolve our skills to deliver cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Working closely with clients as true partners. Your success is our success, and we're committed to achieving it together.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description:
        "Delivering projects on time and within budget without sacrificing quality. We value your time and investment.",
    },
  ];

  return (
    <main className="about-page py-5" style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <div className="container">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <br></br>
          <br></br>
          <h1 className="display-4 fw-bold text-primary mb-3">About Lumina Technologies</h1>
          <p className="lead text-secondary">
            Bridging technology and business to create lasting digital impact.
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          className="mx-auto mb-5"
          style={{ maxWidth: "700px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="fs-5 text-center text-secondary mb-4">
            We are a passionate team of developers, designers, and digital strategists committed to delivering exceptional digital experiences.
            With over 5 years of combined experience, we've helped businesses of all sizes transform their innovative ideas into successful digital products.
          </p>
          <p className="fs-5 text-center text-secondary">
            Our mission is to bridge the gap between cutting-edge technology and business success, creating solutions that not only meet technical requirements but drive measurable business value and create lasting impact in the digital landscape.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="col"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 0 15px rgba(0,123,255,0.4)",
              }}
            >
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4 bg-white">
                <div
                  className="value-icon mb-3"
                  style={{ fontSize: "3rem", userSelect: "none" }}
                >
                  {value.icon}
                </div>
                <h5 className="value-title fw-bold text-primary mb-2">
                  {value.title}
                </h5>
                <p className="value-description text-secondary fs-6">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default About;
