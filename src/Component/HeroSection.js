import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"; // you can keep or replace your CDN CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // important: import bootstrap JS here

const ITServicesWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Animation Variants
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

  const scaleOnHover = {
    whileHover: { scale: 1.05, y: -10 },
    transition: { type: "spring", stiffness: 300 },
  };

  const floatingAnimation = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // SVG Components
  const MobileIcon = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="12"
        y1="18"
        x2="12.01"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const ServerIcon = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="2"
        y="9"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="2"
        y="15"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="6"
        y1="5"
        x2="6.01"
        y2="5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="11"
        x2="6.01"
        y2="11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="17"
        x2="6.01"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const CodeIcon = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="16,18 22,12 16,6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="8,6 2,12 8,18"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DesignIcon = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const HeroIllustration = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor="var(--accent-primary)"
            stopOpacity="0.8"
          />
          <stop
            offset="100%"
            stopColor="var(--accent-secondary)"
            stopOpacity="0.8"
          />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor="var(--accent-secondary)"
            stopOpacity="0.6"
          />
          <stop
            offset="100%"
            stopColor="var(--accent-primary)"
            stopOpacity="0.6"
          />
        </linearGradient>
      </defs>

      {/* Background circles */}
      <circle cx="350" cy="50" r="30" fill="url(#grad1)" opacity="0.3" />
      <circle cx="50" cy="250" r="40" fill="url(#grad2)" opacity="0.2" />
      <circle
        cx="300"
        cy="200"
        r="20"
        fill="var(--accent-primary)"
        opacity="0.4"
      />

      {/* Main laptop */}
      <rect
        x="100"
        y="120"
        width="200"
        height="120"
        rx="8"
        fill="var(--card-bg)"
        stroke="var(--border-color)"
        strokeWidth="2"
      />
      <rect
        x="110"
        y="130"
        width="180"
        height="100"
        rx="4"
        fill="url(#grad1)"
      />
      <rect
        x="190"
        y="240"
        width="20"
        height="8"
        rx="4"
        fill="var(--text-secondary)"
      />
      <rect
        x="150"
        y="250"
        width="100"
        height="4"
        rx="2"
        fill="var(--text-secondary)"
      />

      {/* Screen content */}
      <rect
        x="125"
        y="145"
        width="150"
        height="8"
        rx="4"
        fill="white"
        opacity="0.9"
      />
      <rect
        x="125"
        y="160"
        width="100"
        height="6"
        rx="3"
        fill="white"
        opacity="0.7"
      />
      <rect
        x="125"
        y="172"
        width="130"
        height="6"
        rx="3"
        fill="white"
        opacity="0.7"
      />
      <rect
        x="125"
        y="184"
        width="80"
        height="6"
        rx="3"
        fill="white"
        opacity="0.7"
      />

      {/* Floating elements */}
      <motion.g {...floatingAnimation}>
        <rect
          x="320"
          y="100"
          width="40"
          height="40"
          rx="8"
          fill="var(--accent-primary)"
          opacity="0.8"
        />
        <path
          d="M330 110 L340 120 L350 110 M340 110 L340 130"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>

      <motion.g {...floatingAnimation} transition={{ delay: 1 }}>
        <circle
          cx="80"
          cy="80"
          r="25"
          fill="var(--accent-secondary)"
          opacity="0.8"
        />
        <path
          d="M70 75 L80 85 L90 75 M70 85 L90 85"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>

      <motion.g {...floatingAnimation} transition={{ delay: 2 }}>
        <rect
          x="320"
          y="250"
          width="35"
          height="35"
          rx="6"
          fill="url(#grad2)"
        />
        <circle cx="337.5" cy="267.5" r="8" fill="white" opacity="0.9" />
      </motion.g>
    </svg>
  );

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <style jsx>{`
        .app {
          transition: all 0.3s ease;
          overflow-x: hidden;
        }

        .light {
          --bg-primary: #ffffff;
          --bg-secondary: #f8f9fa;
          --bg-tertiary: #e9ecef;
          --text-primary: #212529;
          --text-secondary: #6c757d;
          --accent-primary: #007bff;
          --accent-secondary: #0056b3;
          --card-bg: #ffffff;
          --border-color: rgba(0, 0, 0, 0.08);
          --shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          --shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.15);
          --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .dark {
          --bg-primary: #0d1117;
          --bg-secondary: #161b22;
          --bg-tertiary: #21262d;
          --text-primary: #f0f6fc;
          --text-secondary: #8b949e;
          --accent-primary: #58a6ff;
          --accent-secondary: #1f6feb;
          --card-bg: #161b22;
          --border-color: rgba(240, 246, 252, 0.08);
          --shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          --shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.4);
          --gradient: linear-gradient(135deg, #58a6ff 0%, #1f6feb 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", sans-serif;
          transition: all 0.3s ease;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(
            135deg,
            var(--bg-primary) 0%,
            var(--bg-secondary) 100%
          );
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at top left,
            var(--accent-primary) 20,
            transparent 50%
          );
          pointer-events: none;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 600px;
        }

        .hero-stats {
          margin-top: 4rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* Section Styles */
        .section {
          padding: 100px 0;
          position: relative;
        }

        .section:nth-child(even) {
          background-color: var(--bg-secondary);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          color: var(--text-primary);
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--gradient);
          border-radius: 2px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: -2rem auto 4rem;
          line-height: 1.6;
        }

        /* Card Styles */
        .card {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          box-shadow: var(--shadow);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-8px);
          border-color: var(--accent-primary);
        }

        .card-body {
          padding: 2.5rem;
          position: relative;
          z-index: 2;
        }

        /* Service Cards */
        .service-card {
          text-align: center;
          position: relative;
        }

        .service-icon {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
          font-size: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .feature-list li {
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
        }

        .feature-list li:before {
          content: "✓";
          color: var(--accent-primary);
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero {
            text-align: center;
            padding: 100px 0 60px;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .card-body {
            padding: 2rem;
          }

          .navbar-nav {
            text-align: center;
            padding-top: 1rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-stats {
            margin-top: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Loading Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="col-lg-6">
              <motion.h1 variants={fadeInUp}>
                Crafting Digital Excellence
              </motion.h1>
              <motion.p variants={fadeInUp}>
                We transform innovative ideas into powerful digital solutions.
                From cutting-edge mobile apps to complex web platforms, we
                deliver technology that drives business growth and creates
                exceptional user experiences.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="d-flex gap-3 flex-wrap"
              >
                <motion.button
                  className="btn btn-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  className="btn btn-outline-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </motion.div>

              {/* Hero Stats */}
              <motion.div className="hero-stats" variants={fadeInUp}>
                <div className="row">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 col-md-3">
                      <div className="stat-item">
                        <motion.span
                          className="stat-number"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.8 + index * 0.1,
                            duration: 0.5,
                          }}
                        >
                          {stat.number}
                        </motion.span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{ height: "450px" }}
              >
                <HeroIllustration />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bootstrap Bundle JS */}

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
        defer
      ></script>
    </div>
  );
};

export default ITServicesWebsite;
