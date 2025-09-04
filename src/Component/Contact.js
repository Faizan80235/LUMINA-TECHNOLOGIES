import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">
            We’d love to hear from you! Connect with us through our details or
            simply fill out the form.
          </p>
        </motion.div>

        <div className="row">
          {/* Left: Contact Info */}
          <motion.div
            className="col-lg-5 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="d-flex flex-column gap-4">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h6 className="fw-bold mb-1">📍 Address</h6>
                <p className="text-muted mb-0">
                  123 Tech Street, Innovation City, USA
                </p>
              </div>
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h6 className="fw-bold mb-1">📧 Email</h6>
                <p className="text-muted mb-0">contact@lumina.com</p>
              </div>
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h6 className="fw-bold mb-1">📞 Phone</h6>
                <p className="text-muted mb-0">+1 (555) 123-4567</p>
              </div>
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h6 className="fw-bold mb-2">🌐 Follow Us</h6>
                <div className="d-flex gap-3">
                  <a href="#" className="text-primary fs-5">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-info fs-5">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-danger fs-5">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-dark fs-5">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <motion.button
                      type="submit"
                      className="btn btn-primary px-4 py-2 rounded-pill"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
