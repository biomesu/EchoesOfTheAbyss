import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  ["Game Summary", "expertise"],
  ["News", "history"],
  ["Support", "Support"]
];

function Navigation({ parentToChild }) {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        if (window.scrollY > navbar.clientHeight) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>
        {`
          .nav-link:hover {
            background-color: #4B0082; /* Dark purple */
            color: white;
            transition: background-color 0.3s ease;
          }
        `}
      </style>
      <nav
        id="navigation"
        className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item[0]}>
                  <a
                    className="nav-link"
                    href="#"
                    style={{ color: "white" }}
                    onClick={(event) => scrollToSection(item[1], event)}
                  >
                    {item[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

