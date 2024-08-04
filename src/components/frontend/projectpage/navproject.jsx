import "../design/project.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const NavProject = () => {
  const logoruang32 = {
    logoImg: "/images/logo baru 23.png",
    iconNavbar: "/public/image/search.png",
  };

  return (
    <div className="nav-container">
      <motion.div id="navbar" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
        <div className="navbar-container">
          <div className="logo">
            <img src={logoruang32.logoImg} alt="logo ruang 32" style={{ filter: "none" }} />
          </div>
          <ul className="navbar-ul">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/">HOME</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/about">ABOUT US</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/projects">PROJECTS</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/howitwork">HOW IT WORKS</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/blog">BLOG</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/contact">CONTACT</Link>
            </motion.li>
          </ul>
          <div className="logo-icon">
            <img src={logoruang32.iconNavbar} alt="iconSearch" />
          </div>
        </div>
      </motion.div>
      <div id="banner-project">
        <Parallax bgImage="/images/projectshowroom.png" strength={500}>
          <div className="banner-project-container">
            <div className="banner-project-overlay"></div>
            <div className="banner-project-item">
              <Link to="/">
                <h4>HOME</h4>
              </Link>
              <span></span>
              <Link to="/projects">
                <h4>PROJECT</h4>
              </Link>
            </div>
            <div className="banner-project-item-two">
              <h2>Our Project</h2>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default NavProject;
