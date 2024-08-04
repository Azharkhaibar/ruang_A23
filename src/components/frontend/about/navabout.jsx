import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../design/about.css";

export const NavAbout = () => {
  const logoData = {
    logoImg: "/images/logo baru 23.png",
    iconNavbar: "/public/image/search.png",
  };

  return (
    <div className="nav-container">
      <motion.div id="navbar" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
        <div className="navbar-container">
          <div className="logo">
            <img src={logoData.logoImg} alt="logo" style={{ filter: "none" }} />
          </div>
          <ul className="navbar-ul" style={{ color: "black" }}>
            <motion.li id="navbar_li_black" whileHover={{ scale: 1.1 }} style={{ color: "black" }}>
              <Link to="/" style={{ color: "black" }}>
                HOME
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/about" style={{ color: "black" }}>
                ABOUT US
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/projects" style={{ color: "black" }}>
                PROJECTS
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/howitwork" style={{ color: "black" }}>
                HOW IT WORKS
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/blog" style={{ color: "black" }}>
                BLOG
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/contact" style={{ color: "black" }}>
                CONTACT
              </Link>
            </motion.li>
          </ul>
          <div className="logo-icon">
            <img src={logoData.iconNavbar} alt="search icon" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};


