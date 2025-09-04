import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for toggler
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  // Close mobile menu on link click
  const handleNavClick = () => setExpanded(false);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "saturate(180%) blur(12px)",
        transition: "background-color 0.3s ease",
        zIndex: 1050,
      }}
    >
      <div className="container">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand fw-bold fs-3 text-primary">
          LUMINA TECHNOLOGIES
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
          style={{ filter: "brightness(0.7)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link fs-6 fw-semibold ${
                    isActive
                      ? "text-primary border-bottom border-3 border-primary"
                      : "text-dark"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link fs-6 fw-semibold ${
                    isActive
                      ? "text-primary border-bottom border-3 border-primary"
                      : "text-dark"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link fs-6 fw-semibold ${
                    isActive
                      ? "text-primary border-bottom border-3 border-primary"
                      : "text-dark"
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/work"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link fs-6 fw-semibold ${
                    isActive
                      ? "text-primary border-bottom border-3 border-primary"
                      : "text-dark"
                  }`
                }
              >
                Work
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link fs-6 fw-semibold ${
                    isActive
                      ? "text-primary border-bottom border-3 border-primary"
                      : "text-dark"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
