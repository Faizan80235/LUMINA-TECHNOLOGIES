import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand / About */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold text-uppercase">Lustrix Software Solutions</h5>
            <p className="small">
              Driving innovation through technology solutions in AI, web,
              mobile, and cloud. We deliver excellence and empower businesses to
              scale smarter.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-light text-decoration-none">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">📍 123 Tech Street, Innovation City</p>
            <p className="small mb-1">📧 contact@lumina.com</p>
            <p className="small mb-3">📞 +1 (555) 123-4567</p>

            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </motion.div>
        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} Lumina Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
