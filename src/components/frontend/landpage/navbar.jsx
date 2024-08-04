import "../design/App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Unavbar = ({ Ufile }) => {
  return <div></div>;
};

const Dnavbar = ({ Dfile }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <div id="downnavbar" className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="logo">
            <Link to="/">
              <img src="/public/images/logo baru 23.png" alt="Logo" style={{width: "150px", filter: "none", marginBottom: "5%"}} />
            </Link>
          </div>
          <div className="navbar">
            <ul className="navbar-list">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/howitwork">HOW IT WORKS</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <img src={Dfile.ig} alt="Instagram" />
            <img src={Dfile.twitter} alt="Twitter" />
            <img src={Dfile.fb} alt="Facebook" />
            <img src={Dfile.pinterest} alt="Pinterest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Unavbar, Dnavbar };
