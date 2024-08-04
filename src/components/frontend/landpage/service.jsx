import "../../frontend/design/App.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring } from "react-spring";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { services, blogPosts, logos, images, testimonials, PortofolioTesti, BeforeAfter } from "../../../data/metadata2";
import { Box, Text, Heading, Image, Card, Flex, Divider, Icon, Button, Avatar, Stack, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaBed, FaBriefcase, FaUtensils, FaCouch, FaMusic } from "react-icons/fa";
import "@fontsource/montserrat";
import "@fontsource/lato";
import ComparisonSlider from "../../function/comparisonslider";
import { imgServ } from "../../../pages/home";
import { CardBenefit, RecentProject } from "../../layout/card";
import { BenefitDataCard, BenefitSubTitle } from "../../../data/metadata";

const Service = () => {
  const [{ x }, set] = useSpring(() => ({ x: -100 }));
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const ReactSlickProvider = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // hapus

  const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
  };

  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue("#3aa6b9", "gray.800")}
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: useColorModeValue("#3aa6b9", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    );
  };

  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={"h3"} fontSize={"xl"} color="white">
        {children}
      </Heading>
    );
  };

  const TestimonialText = ({ children }) => {
    return (
      <Text textAlign={"center"} color={useColorModeValue("white", "white")} fontSize={"sm"}>
        {children}
      </Text>
    );
  };

  const TestimonialAvatar = ({ src, name, title }) => {
    return (
      <Flex align={"center"} mt={8} direction={"column"}>
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

  const videoData = [
    {
      url: "https://www.youtube.com/embed/1U0eSqvP2eU",
    },
    {
      url: "https://www.youtube.com/embed/vncrSbREiSM",
    },
    {
      url: "https://www.youtube.com/embed/o1UOnWsk87o",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videoData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videoData.length - 1 ? 0 : prevIndex + 1));
  };

  const [activeTab, setActiveTab] = useState("Bedroom");
  const [activeRoom, setActiveRoom] = useState("roomAzhar");

  useEffect(() => {
    switch (activeTab) {
      case "Bedroom":
        setActiveRoom("roomAzhar");
        break;
      case "Office":
        setActiveRoom("brandPerurriTalk");
        break;
      case "Kitchen":
        setActiveRoom("kitchenAzhar");
        break;
      case "Family Room":
        setActiveRoom("livingRoom");
        break;
      case "Studio":
        setActiveRoom("brandIde");
        break;
      default:
        setActiveRoom("");
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveRoom("");
  };

  const handleRoomClick = (room) => {
    setActiveRoom(room);
  };

  const tabData = BeforeAfter.find((tab) => Object.keys(tab)[0].toLowerCase() === activeTab.toLowerCase());
  const content = tabData ? tabData[activeTab.toLowerCase()] : {};

  const fadeIn = (direction = "up", delay = 0) => {
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
    };
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      set({ x: 0 });
      set({ x: -100, reset: true });
    }, 10000);
    return () => clearInterval(interval);
  }, [set]);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Box w="80%" h="50vh" margin="auto" pt="5%">
        <Box display="flex" justifyContent="center" alignItems="center" h="300px" bg="linear-gradient(to top,  hwb(0 83% 17% / 0), hwb(0 83% 17% / 0.288))" p="45px" borderRadius="30px">
          <div className="card__service">
            <div className="card__container__service">
              <p className="card-title">Design</p>
              <p className="small-desc">
                We provide unique design services that stand out from the rest. With fresh ideas and a creative approach, our designs are tailored to fit your specific character and style. Our innovative concepts ensure that your vision is
                brought to life in a way that is both original and perfectly suited to your needs.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
          <div className="card__service">
            <div className="card__container__service">
              <p className="card-title">Build</p>
              <p className="small-desc">
                We also provide building services with a professional team, working quickly, neatly, and with great attention to detail. Our team is dedicated to delivering high-quality results, ensuring that every project is completed to
                your satisfaction.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <div id="service">
        <div className="service-container" style={{ backgroundImage: `url(${imgServ.imgS})` }}>
          <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }} className="txt-service">
            <h4>SERVICE WE DO</h4>
            <h2>
              Our highlighted services <br />
              for interior design
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="card-service">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="card-service-container">
                <img src={service.hoverImg} alt={service.title} className="card-service-hover-img" />
                <div className="card-service-item">
                  <div className="card-service-overlay"></div>
                  <img src={service.imgIcon} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* LAYOUT CARD */}
        <CardBenefit />
        <RecentProject />

        <Box w="100%" h="145vh" py="5%" px="2%" bgColor="hwb(0 91% 7% / 0.288)" pos="relative">
          <Box position="absolute" w="500px" h="500px" filter="blur(200px)" bgColor="rgba(122, 228, 255, 0.849)" zIndex="-2" right="90%"></Box>
          <Box position="absolute" w="500px" h="500px" filter="blur(400px)" bgColor="hwb(203 50% 0%)" zIndex="-2" right="0%" bottom="-10%"></Box>
          <Box textAlign="center" mb="4%">
            <Text fontSize="22px" fontWeight="medium" mb="1%">
              GET INSPIRED
            </Text>

            <Heading fontSize="32px" fontFamily="Montserrat, sans-serif">
              Explore real client before & afters.
            </Heading>

            <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" mb="4%" pt="20px">
              <Button
                onClick={() => handleTabClick("Bedroom")}
                bgColor={activeTab === "Bedroom" ? "white" : "white"}
                color="black"
                borderRadius="full"
                fontSize="20px"
                px="15px"
                py="20px"
                mx="5px"
                fontWeight="medium"
                boxShadow="none"
                display="flex"
                alignItems="center"
                gap="10px"
                transition="background-color 0.3s"
                _hover={{ bgColor: "#1e8e98" }}
              >
                <FaBed />
                Bedroom
              </Button>
              <Button
                onClick={() => handleTabClick("Office")}
                bgColor={activeTab === "Office" ? "#1e8e98" : "white"}
                color="black"
                borderRadius="full"
                fontSize="20px"
                px="20px"
                py="20px"
                mx="5px"
                fontWeight="medium"
                boxShadow="none"
                display="flex"
                alignItems="center"
                gap="10px"
                transition="background-color 0.3s"
                _hover={{ bgColor: "#1e8e98" }}
              >
                <FaBriefcase />
                Office
              </Button>
              <Button
                onClick={() => handleTabClick("Kitchen")}
                bgColor={activeTab === "Kitchen" ? "#1e8e98" : "white"}
                color="black"
                borderRadius="full"
                fontSize="20px"
                px="20px"
                py="20px"
                mx="5px"
                fontWeight="medium"
                boxShadow="none"
                display="flex"
                alignItems="center"
                gap="10px"
                transition="background-color 0.3s"
                _hover={{ bgColor: "#1e8e98" }}
              >
                <FaUtensils />
                Kitchen
              </Button>
              <Button
                onClick={() => handleTabClick("Family Room")}
                bgColor={activeTab === "Family Room" ? "#1e8e98" : "white"}
                color="black"
                borderRadius="full"
                fontSize="20px"
                px="20px"
                py="20px"
                fontWeight="medium"
                mx="5px"
                boxShadow="none"
                display="flex"
                alignItems="center"
                gap="10px"
                transition="background-color 0.3s"
                _hover={{ bgColor: "#1e8e98" }}
              >
                <FaCouch />
                Family Room
              </Button>
              <Button
                onClick={() => handleTabClick("Studio")}
                bgColor={activeTab === "Studio" ? "#1e8e98" : "white"}
                color="black"
                borderRadius="full"
                fontSize="20px"
                px="20px"
                py="20px"
                mx="5px"
                fontWeight="medium"
                boxShadow="none"
                display="flex"
                alignItems="center"
                gap="10px"
                transition="background-color 0.3s"
                _hover={{ bgColor: "#1e8e98" }}
              >
                <FaMusic />
                Studio
              </Button>
            </Box>
          </Box>

          <Box textAlign="center">
            {activeTab === "Bedroom" && (
              <Box w="85%" h="100%" margin="auto">
                <Box display="flex" gap="30px" borderBottom="2px solid black">
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "roomAzhar" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "roomAzhar" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("roomAzhar")}
                  >
                    Azhars room
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "roomTita" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "roomTita" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("roomTita")}
                  >
                    Titas room
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "roomHan" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "roomHan" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("roomHan")}
                  >
                    Han room
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "roomFaruq" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "roomFaruq" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("roomFaruq")}
                  >
                    Faruq room
                  </Button>
                </Box>
                {/* Add content for Bedroom here if needed */}
              </Box>
            )}

            {activeTab === "Office" && (
              <Box w="85%" h="100%" margin="auto">
                <Box display="flex" gap="30px" borderBottom="2px solid black">
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "brandPerurriTalk" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "brandPerurriTalk" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("brandPerurriTalk")}
                  >
                    Perurri Talk
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "brandRiseArrow" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "brandRiseArrow" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black" }}
                    onClick={() => handleRoomClick("brandRiseArrow")}
                  >
                    Rise Arrow
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "brandBahaus" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "brandBahaus" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("brandBahaus")}
                  >
                    Bahaus
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "minimalistOffice" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "minimalistOffice" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("minimalistOffice")}
                  >
                    Minimalist Office
                  </Button>
                </Box>
              </Box>
            )}

            {activeTab === "Kitchen" && (
              <Box w="85%" h="100%" margin="auto">
                <Box display="flex" gap="30px" borderBottom="2px solid black">
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "kitchenAzhar" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "kitchenAzhar" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("kitchenAzhar")}
                  >
                    Azhars Kitchen
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "kitchenHan" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "kitchenHan" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("kitchenHan")}
                  >
                    Hans Kitchen
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "kitchenTita" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "kitchenTita" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("kitchenTita")}
                  >
                    Titas Kitchen
                  </Button>
                </Box>
              </Box>
            )}

            {activeTab === "Family Room" && (
              <Box w="85%" h="100%" margin="auto">
                <Box display="flex" gap="30px" borderBottom="2px solid black">
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "livingRoom" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "livingRoom" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("livingRoom")}
                  >
                    Living Room
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "modernTvroom" ? "1" : "0.6"}`}
                    borderBottom={`2px solid ${activeRoom === "modernTvRoom" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("modernTvRoom")}
                  >
                    Modern TV Room
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    borderBottom={`2px solid ${activeRoom === "modernLivingRoom" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("modernLivingRoom")}
                  >
                    Modern Living Room
                  </Button>
                </Box>
              </Box>
            )}

            {activeTab === "Studio" && (
              <Box w="85%" h="100%" margin="auto">
                <Box display="flex" gap="30px" borderBottom="2px solid black">
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    opacity={`${activeRoom == "brandIde" ? "1" : "0.6"}`}
                    bgColor="transparent"
                    borderBottom={`2px solid ${activeRoom === "brandIde" ? "black" : "transparent"}`}
                    p="none"
                    borderRadius="none"
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black", opacity: "1" }}
                    onClick={() => handleRoomClick("brandIde")}
                  >
                    Ide Studio
                  </Button>
                  <Button
                    fontWeight="medium"
                    fontSize="20px"
                    boxShadow="none"
                    bgColor="transparent"
                    opacity={`${activeRoom == "brandIde" ? "1" : "0.6"}`}
                    p="none"
                    borderRadius="none"
                    borderBottom={`2px solid ${activeRoom === "brandNutalk" ? "black" : "transparent"}`}
                    _hover={{ borderBottom: "4px solid black", bgColor: "transparent", color: "black" }}
                    onClick={() => handleRoomClick("brandNutalk")}
                  >
                    Nutalk Studio
                  </Button>
                </Box>
              </Box>
            )}
          </Box>

          <Box>
            {activeTab === "Bedroom" && activeRoom && (
              <Box width="87.5%" margin="auto" height="800px" p="20px">
                <ComparisonSlider beforeImage={content[activeRoom]?.before} afterImage={content[activeRoom]?.after} />
              </Box>
            )}

            {activeTab === "Office" && activeRoom && (
              <Box width="87.5%" margin="auto" height="800px" p="20px">
                <ComparisonSlider beforeImage={content[activeRoom]?.before} afterImage={content[activeRoom]?.after} />
              </Box>
            )}

            {activeTab === "Kitchen" && activeRoom && (
              <Box width="87.5%" margin="auto" height="800px" p="20px">
                <ComparisonSlider beforeImage={content[activeRoom]?.before} afterImage={content[activeRoom]?.after} />
              </Box>
            )}

            {activeTab === "Family Room" && activeRoom && (
              <Box width="87.5%" margin="auto" height="800px" p="20px">
                <ComparisonSlider beforeImage={content[activeRoom]?.before} afterImage={content[activeRoom]?.after} />
              </Box>
            )}

            {activeTab === "Studio" && activeRoom && (
              <Box width="87.5%" margin="auto" height="800px" p="20px">
                <ComparisonSlider beforeImage={content[activeRoom]?.before} afterImage={content[activeRoom]?.after} />
              </Box>
            )}

            <Text
              textAlign="center"
              fontSize="20px"
              p="15px"
              bgColor="#3aa6b9"
              w="250px"
              margin="auto"
              mt="3%"
              cursor="pointer"
              borderRadius="30px"
              transition="all 0.5s"
              _hover={{ bgColor: "white", color: "black", boxShadow: "0px 10px 40px 5px hwb(0 0% 100% / 0.146)" }}
              color="white"
            >
              View More
            </Text>
          </Box>
        </Box>

        <motion.div ref={carousel} id="pict">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="pict-container" whileTap={{ cursor: "grabbing" }}>
            {images.map((image, index) => (
              <motion.div className="pict-item" key={index}>
                <img src={image.src} alt={image.alt} />
                <div className="pict-overlay">
                  <span>{image.description}</span>
                  <h2>{image.title}</h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Box w="100%" h={{ base: "265vh", lg: "135vh" }} pos="relative">
          <Box position="absolute" w={{ base: "300px", md: "400px" }} h={{ base: "300px", md: "400px" }} filter="blur(200px)" bgColor="hsla(64, 100%, 68%, 0.849)" zIndex="-2"></Box>
          <Box pos="relative">
            <Heading textAlign="center" pt={{ base: "10%", md: "4%" }} fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize={{ base: "24px", md: "36px" }}>
              Portofolio Design Interior Terbaik
              <Text textAlign="center" fontSize={{ base: "16px", md: "18px" }} fontWeight="400" pt="1%">
                Koleksi inspirasi design interior modern terbaru dengan kualitas material terbaik oleh tim Ruanga32
              </Text>
            </Heading>
            <Box w="100%" h="100%" margin="auto" display="flex" p={{ base: "4%", md: "6.5%" }} gap={{ base: "20px", md: "30px" }} flexWrap="wrap" pos="relative" justifyContent="center">
              {PortofolioTesti.map((item) => (
                <Box key={item.id} w={{ base: "100%", md: "420px" }} h={{ base: "auto", md: "400px" }} margin="auto" display="flex" flexDirection="column" alignItems="center">
                  <Box display="flex" alignItems="center" pb="3%" w="100%">
                    <Image width="40px" height="40px" borderRadius="full" src={item.showroom_testi} />
                    <Heading fontSize={{ base: "14px", md: "15px" }} display="flex" gap="10px" fontFamily="Lato, sans-serif" pl="2%">
                      {item.name_testi}
                      <Text fontWeight="400" fontStyle="italic">
                        {item.role_testi}
                      </Text>
                    </Heading>
                  </Box>
                  <Image src={item.img_testi} w="100%" h={{ base: "200px", md: "280px" }} objectFit="cover" borderRadius="20px" cursor="pointer" />
                  <Box display="flex" alignItems="center">
                    <Heading display="flex" gap="10px" fontSize={{ base: "18px", md: "22px" }} pt="2%" alignItems="center" fontFamily="Lato, sans-serif">
                      {item.design_interior}
                      <Text fontWeight="400">{item.jenis}</Text>
                      <Icon as={FaStar} color="green" fontSize="10px" />
                      <Icon as={FaStar} color="green" fontSize="10px" />
                      <Icon as={FaStar} color="green" fontSize="10px" />
                      <Icon as={FaStar} color="green" fontSize="10px" />
                    </Heading>
                  </Box>
                  <Text display="flex" gap="10px" fontSize={{ base: "12px", md: "14px" }} opacity="0.6" pt="2%" fontFamily="Lato, sans-serif">
                    {item.jenis_design}
                    <Text>{item.alamat}</Text>
                  </Text>
                </Box>
              ))}
              <Button
                margin="30px auto"
                p="30px 20px"
                borderRadius="30px"
                bgColor="#2e8a99"
                color="white"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  boxShadow: "0 10px 20px hwb(0 0% 100% / 0.137)",
                }}
              >
                <Link to="/projects">View More</Link>
              </Button>
            </Box>
          </Box>
        </Box>

        {/* CONTACT SECTION */}
        <div id="contact-sec">
          <div className="contact-sec-wrapper">
            <div className="contact-sec-left">
              <motion.h4 variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }}>
                Hire us for your new Project
              </motion.h4>
              <motion.h2 variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }}>
                Get Interior Design Right Now
              </motion.h2>
            </div>
            <div className="contact-sec-right">
              <Link to="/contact">
                <h3>CONTACT WITH US</h3>
              </Link>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL */}
        <Box id="testimoni" w="100%" h={{ md: "65vh", lg: "155vh" }}>
          <Heading textAlign="center" pt={{ lg: "3%", base: "3%" }} fontSize={{ base: "18px", md: "28px", lg: "30px" }} fontFamily="Lato, sans-serif" fontWeight="600">
            Reviews
            <Text fontWeight="400" textAlign="center" fontFamily="Montserrat, sans-serif" pt="20px" fontSize={{ base: "20px", sm: "22px", md: "28px", lg: "35px" }}>
              Over 100,000 designs completed
              <br /> for happy clients.
            </Text>
          </Heading>
          <Box w="90%" h="500px" margin="auto" mt="4%">
            <Slider {...ReactSlickProvider}>
              {testimonials.map((testi, index) => (
                <Box key={index} mx="auto" p="4">
                  <Card borderRadius="xl" overflow="hidden" width="100%" maxW="600px" bgColor="#FFFFFF" textAlign="center" borderColor="black" h="auto" p="10px" border="none" boxShadow="none">
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>{testi.name}</TestimonialHeading>
                        <TestimonialText>{testi.feedback}</TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar src={testi.image} name={testi.name} title={testi.role} />
                    </Testimonial>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>

          <Box width="100%" h={["auto", "90vh"]} p={["4%", "4.5%"]} background="linear-gradient(to top, rgba(68, 228, 214, 0.76), rgb(255, 255, 255))" mt="50px">
            <Heading textAlign="center" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize={{ base: "24px", sm: "28px", md: "35px", xl: "35px" }} color={{ base: "black", md: "black" }} mb={["4%", "5%"]}>
              Our Client
            </Heading>
            <Box display="flex" alignItems="center" justifyContent="center" p={["10px", "20px"]} zIndex="-1" mt="5%">
              <Box
                display="flex"
                justifyContent="center"
                width={["90%", "80%"]}
                flexWrap="wrap"
                h={{ md: "30vh", lg: "45vh" }}
                gap={["15px", "30px"]}
                backgroundColor="white"
                p={["20px", "30px"]}
                borderRadius="25px"
                boxShadow="0px 20px 30px #00000042"
                alignItems="center"
              >
                {logos.map((src, index) => (
                  <Box key={index} borderRadius="12px" padding={["10px", "20px"]} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.05)" }} textAlign="center">
                    <Image
                      src={src}
                      alt={`logo-${index}`}
                      objectFit="contain"
                      boxSize={{ base: "80px", md: "100px", lg: "150px" }} // Larger size for mobile
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* SECTION BLOG */}
        <Box width="100%" minHeight={{ lg: "85vh", md: "90vh" }} background="linear-gradient(135deg, #f3f4f6, #e5e7eb)" padding="2rem 0">
          <Box maxWidth="1200px" margin="0 auto" padding="0 1rem">
            <Box textAlign="center" marginBottom="2rem">
              <Heading fontSize={{ lg: "2.5rem", md: "2rem", base: "1.5rem" }} fontWeight="500" color="#333" paddingTop="3%" fontFamily="Montserrat, sans-serif" margin="0">
                Latest Blog Posts
              </Heading>
            </Box>
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}>
              {/* Carousel hp */}
              <Box display={{ base: "block", md: "none" }}>
                <Slider {...settings}>
                  {blogPosts.map((post, index) => (
                    <Box
                      key={index}
                      maxWidth="385px"
                      minHeight="auto"
                      backgroundColor="#fff"
                      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                      borderRadius="20px"
                      overflow="hidden"
                      transition="transform 0.3s ease, box-shadow 0.3s ease"
                      _hover={{
                        transform: "translateY(-10px)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                      margin="0 auto"
                    >
                      <Box>
                        <Image src={post.imgSrc} alt="news" borderRadius="20px" boxSize="100%" objectFit="cover" height="280px" />
                        <Box padding="30px">
                          <Heading as="h1" fontSize="1.5rem" fontWeight="700" color="#333" margin="0 0 0.5rem" fontFamily="var(--font-primary)">
                            {post.title}
                          </Heading>
                          <Text fontSize="1rem" color="#666" opacity="90%" paddingTop="6%" fontWeight="300" margin="0 0 1rem" fontFamily="var(--font-primary)">
                            {post.description}
                          </Text>
                          <Divider borderColor="#d8d8d8" margin="0 0 1rem" />
                          <Text
                            fontSize="1rem"
                            color="#007bff"
                            cursor="pointer"
                            transition="color 0.3s ease, text-decoration 0.3s ease"
                            _hover={{
                              color: "#0056b3",
                              textDecoration: "underline",
                            }}
                          >
                            Read More
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Slider>
              </Box>

              {/* Static Layout for Desktop */}
              <Box display={{ base: "none", md: "flex" }} gap="2.5rem">
                {blogPosts.map((post, index) => (
                  <Box
                    key={index}
                    maxWidth="385px"
                    minHeight="auto"
                    backgroundColor="#fff"
                    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                    borderRadius="20px"
                    overflow="hidden"
                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                    _hover={{
                      transform: "translateY(-10px)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box>
                      <Image src={post.imgSrc} alt="news" borderRadius="20px" boxSize="100%" objectFit="cover" height="280px" />
                      <Box padding="30px">
                        <Heading as="h1" fontSize="1.5rem" fontWeight="700" color="#333" margin="0 0 0.5rem" fontFamily="var(--font-primary)">
                          {post.title}
                        </Heading>
                        <Text fontSize="1rem" color="#666" opacity="90%" paddingTop="6%" fontWeight="300" margin="0 0 1rem" fontFamily="var(--font-primary)">
                          {post.description}
                        </Text>
                        <Divider borderColor="#d8d8d8" margin="0 0 1rem" />
                        <Text
                          fontSize="1rem"
                          color="#007bff"
                          cursor="pointer"
                          transition="color 0.3s ease, text-decoration 0.3s ease"
                          _hover={{
                            color: "#0056b3",
                            textDecoration: "underline",
                          }}
                        >
                          Read More
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
            <Box display="flex" justifyContent="center" mt="4%">
              <Button boxShadow="md" borderRadius="35px" size="xl" bgColor="#3aa6b9" color="white" _hover={{ boxShadow: "xl" }}>
                View More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* OUR VIDEOS */}
        <Box w="100%" h={["auto", "50vh"]} display="flex" justifyContent="center" alignItems="center" bgColor="#3aa6b9" borderRadius={["0", "100px 100px 0 0"]} p={["4", "0"]} overflow="hidden">
          <Box w={["90%", "90%"]} h="100%" p={["4", "0"]} borderRadius={["0", "100px"]} overflow="hidden" display="flex" flexDirection="column" alignItems="center" bgColor="#3aa6b9">
            <Heading textAlign="center" color="white" mb="4" pt={["4%", "4%"]} fontSize={["24px", "36px"]}>
              Videos
            </Heading>
            <Box overflowX="auto" overflowY="hidden" pb="2" pt={["2%", "%"]} display="flex" flexDirection={["column", "row"]} gap="4" justifyContent="center" alignItems="center">
              <Card display="flex" gap="4" flexDirection={["column", "row"]} bgColor="#3aa6b9" borderRadius="md" p="4" alignItems="center">
                <iframe
                  width="400px"
                  height={["300px", "225px"]}
                  src="https://www.youtube.com/embed/1U0eSqvP2eU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ flex: "1", margin: "0 auto" }}
                />
                <iframe
                  width="350px"
                  height={["300px", "225px"]}
                  src="https://www.youtube.com/embed/vncrSbREiSM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ flex: "1", margin: "0 auto" }}
                />
                <iframe
                  width="400px"
                  height={["300px", "225px"]}
                  src="https://www.youtube.com/embed/o1UOnWsk87o"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ flex: "1", margin: "0 auto" }}
                />
              </Card>
            </Box>
          </Box>
        </Box>

        {/* SECTION FAQ */}
        <Box p="3" minH="80vh" background="linear-gradient(to top, rgba(68, 228, 214, 0.76), #3aa6b9)">
          <Flex direction="column" maxW="1175px" mx="auto">
            <Heading textAlign="center" pt="5%" fontFamily="Montserrat, sans-serif" color="white">
              FAQ
            </Heading>
            <Box mb="4" pt="10%" borderBottom="2px solid #ffffff85">
              <Box bg={activeIndex === 0 ? "#f0f0f0" : "transparent"} borderRadius="md" p="4" onClick={() => toggleAccordion(0)} cursor="pointer" _hover={{ bg: "#f0f0f0" }} transition="background-color 0.3s ease">
                <Flex justify="space-between" align="center">
                  <Heading
                    size="lg"
                    fontFamily="Lato, sans-serif"
                    color="white"
                    _hover={{ color: "black" }} // Tambahkan style tambahan untuk mengubah warna heading saat dihover
                  >
                    What is Lorem Ipsum?
                  </Heading>
                  <Icon as={activeIndex === 1 ? ChevronUpIcon : ChevronDownIcon} fontSize="2xl" color="white" />
                </Flex>
                <Text mt="2" fontSize="md" color="#666666" maxH={activeIndex === 0 ? "100px" : "0"} overflow="hidden" transition="max-height 0.3s ease-out">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec dolor vestibulum, vitae condimentum sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec
                  dolor vestibulum, vitae condimentum sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec dolor vestibulum, vitae condimentum sapien facilisis.
                </Text>
              </Box>
            </Box>

            <Box mb="4" borderBottom="2px solid #ffffff85">
              <Box bg={activeIndex === 1 ? "#f0f0f0" : "transparent"} borderRadius="md" p="4" onClick={() => toggleAccordion(1)} cursor="pointer" _hover={{ bg: "#f0f0f0" }} transition="background-color 0.3s ease">
                <Flex justify="space-between" align="center">
                  <Heading size="lg" fontFamily="Lato, sans-serif" color="white">
                    Why do we use Lorem Ipsum?
                  </Heading>
                  <Icon as={activeIndex === 1 ? ChevronUpIcon : ChevronDownIcon} fontSize="2xl" color="white" />
                </Flex>
                <Text mt="2" fontSize="md" color="#666666" maxH={activeIndex === 1 ? "100px" : "0"} overflow="hidden" transition="max-height 0.3s ease-out">
                  Nullam eleifend sit amet justo eget malesuada. Nam fringilla euismod libero, nec fermentum est porta id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec dolor vestibulum, vitae condimentum
                  sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec dolor vestibulum, vitae condimentum sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vehicula lacus nec dolor vestibulum, vitae condimentum sapien facilisis.
                </Text>
              </Box>
            </Box>

            <Box mb="4" borderBottom="2px solid #ffffff85">
              <Box bg={activeIndex === 2 ? "#f0f0f0" : "transparent"} borderRadius="md" p="4" onClick={() => toggleAccordion(2)} cursor="pointer" _hover={{ bg: "#f0f0f0" }} transition="background-color 0.3s ease">
                <Flex justify="space-between" align="center">
                  <Heading size="lg" fontFamily="Lato, sans-serif" color="white">
                    Where does it come from?
                  </Heading>
                  <Icon as={activeIndex === 1 ? ChevronUpIcon : ChevronDownIcon} fontSize="2xl" color="white" />
                </Flex>
                <Text mt="2" fontSize="md" color="#666666" maxH={activeIndex === 2 ? "100px" : "0"} overflow="hidden" transition="max-height 0.3s ease-out">
                  Mauris lacinia augue sed ex imperdiet, et convallis est aliquam. Sed lacinia, sapien quis tristique tristique, metus sapien accumsan ligula.
                </Text>
              </Box>
            </Box>

            <Box mb="4" borderBottom="2px solid #ffffff85">
              <Box bg={activeIndex === 3 ? "#f0f0f0" : "transparent"} borderRadius="md" p="4" onClick={() => toggleAccordion(3)} cursor="pointer" _hover={{ bg: "#f0f0f0" }} transition="background-color 0.3s ease">
                <Flex justify="space-between" align="center">
                  <Heading size="lg" fontFamily="Lato, sans-serif" color="white">
                    How can I use Lorem Ipsum?
                  </Heading>
                  <Icon as={activeIndex === 1 ? ChevronUpIcon : ChevronDownIcon} fontSize="2xl" color="white" />
                </Flex>
                <Text mt="2" fontSize="md" color="#666666" maxH={activeIndex === 3 ? "100px" : "0"} overflow="hidden" transition="max-height 0.3s ease-out">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* FOOTER */}
        <div id="footer" style={{ backgroundImage: "url('/public/images/project 1.jpg')" }}>
          <div className="footer-container">
            <div className="footer-wrapper">
              <div className="footer-left">
                <img src="/public/image/logoruang32.png" alt="Logo" />
                <input type="email" placeholder="Enter your email" />
                <button className="submit-btn" type="submit" style={{ padding: "5px 10px", borderRadius: "30px", width: "150px", height: "50px" }}>
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
    </div>
  );
};

Service.propTypes = {
  iconsServ: PropTypes.shape({
    imgIcon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
