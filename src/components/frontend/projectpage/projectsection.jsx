import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../../data/metadata2";
import { 
  Box,
  Text,
  Flex,
  Image,
  HStack,
  Button,
  IconButton,
  Container
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { ChevronLeftIcon, ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "../design/project.css";
import '../design/slider.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const ProjectSlide = () => {
  const DataSlider = [
    {
      id: 1,
      image: "image/modern girl bedroom.png",
      title: "Project 1",
      description: "lorep ipsum desmucular elvatra e nuoelle musqioto, lorep ipsum desmucular elvatra e nuoelle musqioto lorep ipsum desmucular elvatra e nuoelle musqioto",
      btn_desc: "Get started",
    },
    {
      id: 2,
      image: "/public/images/projectshowroom.png",
      title: "Project 2",
      description: "lorep ipsum desmucular elvatra e nuoelle musqioto, lorep ipsum desmucular elvatra e nuoelle musqioto lorep ipsum desmucular elvatra e nuoelle musqioto elvatra e nuoelle musqioto elvatra e nuoelle musqioto",
      btn_desc: "Get started",
    },
    {
      id: 3,
      image: "/public/image/modernboy apartement.png",
      title: "Project 3",
      description: "lorep ipsum desmucular elvatra e nuoelle musqioto, lorep ipsum desmucular elvatra e nuoelle musqioto lorep ipsum desmucular elvatra e nuoelle musqioto",
      btn_desc: "Get started",
    },
    {
      id: 4,
      image: "image/modern girl bedroom.png",
      title: "Project 4",
      description: "lorep ipsum desmucular elvatra e nuoelle musqioto, lorep ipsum desmucular elvatra e nuoelle musqioto lorep ipsum desmucular elvatra e nuoelle musqioto elvatra e nuoelle musqioto elvatra e nuoelle musqioto",
      btn_desc: "Get started",
    },
  ];
   
  const [isSlideActive, setisSlideActive] = useState(0);
  const [NewNavigateSlider, setNewNavigateSlider] = useState(null);

  const nextSlide = () => {
    setNewNavigateSlider("next");
    setTimeout(() => {
      setisSlideActive((prev) => (prev === DataSlider.length - 1 ? 0 : prev + 1));
      setNewNavigateSlider(null);
    }, 100);
  };

  const prevSlide = () => {
    setNewNavigateSlider("prev");
    setTimeout(() => {
      setisSlideActive((prev) => (prev === 0 ? DataSlider.length - 1 : prev - 1));
      setNewNavigateSlider(null);
    }, 100);
  };

  return (
    <>
      <Box w="100%" h="70vh" position="relative" pos="relative">
        <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#2e8a99" w="59.4%" h="90%" ml="28%" boxShadow="0px 10px 40px 0px hsla(192, 100%, 58%, 0.425)">
          {DataSlider.map((slide, index) => (
            <Image
              key={slide.id}
              src={slide.image}
              w="670px"
              h="520px"
              pos="absolute"
              left="12.7%"
              boxShadow="0px 10px 40px 10px rgba(0, 0, 0, 0.315)"
              borderRadius="20px"
              zIndex={index === isSlideActive ? 1 : 0}
              className={`
                ${index === isSlideActive ? "fade-in" : "fade-out"}
                ${NewNavigateSlider === "next" && index === isSlideActive ? "fade-out" : ""}
                ${NewNavigateSlider === "prev" && index === isSlideActive ? "fade-out" : ""}
              `}
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: index === isSlideActive ? 1 : 0,
              }}
            />
          ))}
          <Box color="white" p={5} borderRadius="md" w="100%" h="90%" pl="49%" pos="relative" zIndex="0">
            <Text pt="18%" fontSize="45px" fontFamily="Montserrat, sans-serif" fontWeight="600" color="white">
              {DataSlider[isSlideActive].title}
            </Text>
            <Text mt={2} pt="3%" color="white">
              {DataSlider[isSlideActive].description}
            </Text>
            <Button mt="8%" borderRadius="20px" _hover={{ boxShadow: "0 10px 20px rgba(255, 255, 255, 0.5)" }}>
              {DataSlider[isSlideActive].btn_desc}
            </Button>
            <Box w="25%" display="flex" pos="absolute" bottom="0" right="0">
              <Button mt="30px" w="80px" borderRadius="20px" border="1px solid #000" bgColor="hsla(78, 100%, 58%, 0.753)" color="white" _hover={{ bgColor: "white", color: "black" }} onClick={prevSlide}>
                <FaArrowLeft />
              </Button>
              <Button mt="30px" w="80px" borderRadius="20px" border="1px solid #000" bgColor="hsla(78, 100%, 58%, 0.753)" color="white" _hover={{ bgColor: "white", color: "black" }} ml={4} onClick={nextSlide}>
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="project-section">
      <Container maxW="7xl">
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" borderRadius="20px">
          {currentProjects.map((project) => (
            <Box key={project.id} w="30%" mb={6} minH="400px" borderRadius="20px" bgColor="white" overflow="hidden" transition="all 0.5s" _hover={{ boxShadow: "xl" }} border=" 1px solid  hwb(204 85% 13% / 0.411)" cursor="pointer">
              <Image src={project.image} alt={project.title} w="100%" borderRadius=" 20px" />
              <Box pl="15px">
                <Box display="flex" justifyContent="space-between" pt="3%" alignItems="center" margin="auto" px={1}>
                  <Text fontSize="25px" fontFamily="Lato, sans-serif" fontWeight="md">
                    {project.title}
                    <Text fontWeight="400" fontSize="18px" opacity="0.6">
                      {project.descproject}
                    </Text>
                  </Text>
                  <IconButton
                    aria-label="Love"
                    mb="20px"
                    fontSize="20px"
                    p="none"
                    boxShadow="none"
                    icon={<FiHeart />}
                    variant="ghost"
                    colorScheme="red"
                    _hover={{ bg: "none", transition: "none", translate: "none" }}
                    _active={{ bg: "none", boxShadow: "none" }}
                    w="70px"
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <Text px={1} pt="12%" mr={1}>
                    View Project
                  </Text>
                  <IconButton as={ArrowForwardIcon} w={4} h={4} mt={10} bgColor="none" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Flex mt={6} justifyContent="center" alignItems="center">
        <HStack spacing={2}>
          <IconButton
            aria-label="Previous page"
            w="60px"
            bgColor="transparent"
            border="1px solid hwb(204 85% 13% / 0.411)"
            icon={<ChevronLeftIcon />}
            onClick={() => paginate(Math.max(currentPage - 1, 1))}
            isDisabled={currentPage === 1}
            boxShadow="none"
            _hover={{
              bg: "#3aa6b9",
              color: "white",
            }}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              w="45px"
              onClick={() => paginate(index + 1)}
              bg={index + 1 === currentPage ? "#3aa6b9" : "transparent"}
              boxShadow="none"
              border="1px solid hwb(204 85% 13% / 0.411)"
              color={index + 1 === currentPage ? "white" : "black"}
              _hover={{
                bg: "#3aa6b9",
                color: "white",
              }}
            >
              {index + 1}
            </Button>
          ))}
          <IconButton
            aria-label="Next page"
            icon={<ChevronRightIcon />}
            w="60px"
            onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
            isDisabled={currentPage === totalPages}
            bg="transparent"
            border="1px solid hwb(204 85% 13% / 0.411)"
            boxShadow="none"
            _hover={{
              bg: "#3aa6b9",
              color: "white",
            }}
          />
        </HStack>
      </Flex>
    </div>
  );
};

const ProjectCard = ({ image, title }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <motion.div className="project-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
        <div className="overlay-content">
          <span className="overlay-text">Details</span>
          <h2 className="overlay-title">{title}</h2>
        </div>
      </motion.div>
    </div>
  );
};

const FooterProject = () => {
  return (
    <div>
      <div id="footer" style={{ backgroundImage: "url('/public/images/project 1.jpg')" }}>
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <img src="/public/image/logoruang32.png" alt="Logo" />
              <input type="email" placeholder="Enter your email" />
              <button className="submit-btn" type="submit">
                Submit
              </button>
              <div className="icon-footer">
                <p>Phone: +123-456-7890</p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/public/image/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/public/image/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <img src="/public/image/pinterest.png" alt="Pinterest" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/public/image/facebook.png" alt="Facebook" />
                </a>
              </div>
            </div>

            <div className="footer-middle">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/projects">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <h3>Contact</h3>
              <p>Address: 123 Main Street, Anytown, USA</p>
              <p>Phone: +123-456-7890</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectSection, FooterProject };
