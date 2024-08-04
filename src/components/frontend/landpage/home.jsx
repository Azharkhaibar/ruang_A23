import { Link } from "react-router-dom";
import "../design/App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../design/homeres.css";
import { Box } from "@chakra-ui/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { txtProv } from "../../../pages/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const HomeOne = ({ Ifile, txt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    { id: 1, src: "/images/ruang2.png" },
    { id: 2, src: "/images/ruang3.png" },
    { id: 3, src: "/images/ruang6.png" },
    { id: 4, src: "/images/IMG_5563.JPG"}
  ];
  const conceptItems = [
    { imgSrc: Ifile.idea1, title: "Qualified architectures" },
    { imgSrc: Ifile.idea2, title: "Innovative Designs" },
    { imgSrc: Ifile.idea3, title: "Expert Planning" },
  ];

  const fadeAnimation = (direction = "up", delay = 0) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      exit: {
        y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.2,
          easeOut: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const [SlideAnimateFaded, setCurrentSlide] = useState(0);

  const NextSlideReps = () => {
    const next = SlideAnimateFaded === images.length - 1 ? 0 : SlideAnimateFaded + 1;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    const prev = SlideAnimateFaded === 0 ? images.length - 1 : SlideAnimateFaded - 1;
    setCurrentSlide(prev);
  };

  // untuk autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      NextSlideReps();
    }, 3000);
    return () => clearInterval(interval);
  }, [SlideAnimateFaded]);

  return (
    <div>
      <div id="header">
        <Box className="carousel-container" position="relative" borderRadius={{ lg: "0px 0px 50px 50px" }}>
          <Box className="static-content" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="10" textAlign="center">
            <motion.h2
              variants={fadeAnimation("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              fontSize={{ lg: "70px", md: "15px" }}
              paddingBottom="10px"
              fontFamily="Montserrat, sans-serif"
              color="white"
            >
              BUILD YOUR DREAM <br />
              ROOM WITH US
            </motion.h2>
            <motion.h4 variants={fadeAnimation("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} fontSize="20px" fontWeight="400" marginTop="14px" fontFamily="Manrope, sans-serif" color="white">
              Make Your Room Design Into Reality & Find Your Best Furniture With Us
            </motion.h4>
            <Link as={motion.a} to="/projects" className="luxury-button">
              <Box display="flex" gap="20px">
                <motion.h3
                  variants={fadeAnimation("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  padding="14px 28px"
                  backgroundColor="#3aa6b9"
                  color="white"
                  width="auto"
                  textAlign="center"
                  margin="32px auto"
                  borderRadius="25px"
                  fontFamily="Manrope, sans-serif"
                  boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                  transition="all 0.3s ease-out"
                  _hover={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.5)",
                    transform: "translateY(-2px)",
                  }}
                >
                  View Projects
                </motion.h3>
                <motion.h3
                  variants={fadeAnimation("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  padding="14px 28px"
                  backgroundColor={isHovered ? "white" : "transparent"}
                  color={isHovered ? "black" : "white"}
                  width="auto"
                  textAlign="center"
                  margin="32px auto"
                  borderRadius="25px"
                  style={{
                    backgroundColor: isHovered ? "white" : "transparent",
                    border: "2px solid white",
                    fontFamily: "Manrope, sans-serif",
                    boxShadow: isHovered ? "boxShadow: 0 10px 20px rgba(255, 255, 255, 0.5)" : "boxShadow: 0 10px 20px rgba(255, 255, 255, 0.5)",
                    transform: isHovered ? "translateY(-2px)" : "none",
                    transition: "all 0.3s ease-out",
                  }}
                  fontFamily="Manrope, sans-serif"
                  boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                  transition="all 0.3s ease-out"
                  _hover={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.5)",
                    transform: "translateY(-2px)",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px", filter: "invert(1)"   }} />
                  Contact us
                </motion.h3>
              </Box>
            </Link>
          </Box>
          <div className="carousel-track" style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="carousel-slide"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: index === SlideAnimateFaded ? 1 : 0,
                  zIndex: index === SlideAnimateFaded ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </Box>

        {/* CONCEPT */}

        <div className="concept">
          <motion.div className="concept-container">
            {conceptItems.map((item, index) => (
              <motion.div key={index} className="p-1">
                <div className="p-1-item">
                  <img src={item.imgSrc} alt={`idea${index + 1}`} />
                  <motion.h3 variants={fadeAnimation("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                    {item.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="provide">
          <div className="provide-container">
            <div className="left-provide">
              <motion.h4 variants={fadeAnimation("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}>
                WELCOME TO INTERIOR DESIGN
              </motion.h4>
              <Box position="absolute" w="350px" h="350px" filter="blur(200px)" bgColor="rgba(122, 228, 255, 0.849)" zIndex="-2" right="100%"></Box>
              <motion.h1 variants={fadeAnimation("left", 0.5)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}>
                Providing quality design
                <br /> & best solutions
              </motion.h1>
              <p>{txtProv.longTxt}</p>
              <div className="quote-card">
                <h3>We stand for quality, safety & credibility, so you could trust us fully about architectural working process.</h3>
              </div>
              <div className="p-thumb-container">
                <div className="p-thumb-item">
                  <span>
                    <i className="fas fa-check"></i> Residential interior work
                  </span>
                  <span>
                    <i className="fas fa-check"></i> Creative solutions for home
                  </span>
                  <span>
                    <i className="fas fa-check"></i> Modern design ideas
                  </span>
                </div>
                <div className="p-thumb-item">
                  <span>
                    <i className="fas fa-check"></i> Office interior work
                  </span>
                  <span>
                    <i className="fas fa-check"></i> Innovative workspace solutions
                  </span>
                  <span>
                    <i className="fas fa-check"></i> Functional design concepts
                  </span>
                </div>
              </div>
              <div className="btn-provide">
                <h3>Discover more</h3>
              </div>
            </div>
            <motion.div variants={fadeAnimation("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} className="right-provide">
              <img src="/public/images/isometric_3d-removebg-preview.png" alt="room" />
              <Box position="absolute" w="400px" h="400px" filter="blur(200px)" bgColor="rgba(122, 228, 255, 0.849)" zIndex="-2" bottom="45%" right="5%"></Box>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
