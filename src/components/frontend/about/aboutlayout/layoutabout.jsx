import React, { useState, useEffect, useRef } from "react";
import { Box, keyframes, Text, Heading, Flex, HStack, Container, Button, Icon, SimpleGrid, Image, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DataAboutByNumber, DataOurFoundation, PopoverAnimation } from "../../../../data/dataabout";
import { WHYUS } from "./whyus";
import { IncrementNumberAbout } from "../functionabout/incrementnumber";
import { LogoAbout, ImageLoop } from "../../../../data/dataabout";

export const AboutStoryPage = () => {
  const AboutFlexing = [
    {
      imgFlex: "/images/imgabout/imageabout1.JPG",
      altFlex: "Showroom About",
    },
    {
      imgFlex: "/images/imgabout/imageabout2.JPG",
      altFlex: "Showroom About 2",
    },
  ];


  return (
    // ABOUT LAYOUT
    <>
      <Box maxW="11xl" h="80vh" display="flex" pos="relative">
        <Box id="left" w="100%" pos="relative" h="100%" alignItems="center" justifyContent="center" ml="5.8%">
          <Image src={AboutFlexing[1].imgFlex} alt={AboutFlexing[1].altFlex} w="1500px" h="750" bgSize="cover" borderRadius="40px" />
        </Box>
        <Box id="right" p={10} display="flex" flexDirection="column" justifyContent="center">
          <Box maxW="450px" h="450px" bgColor="#282828" pos="absolute" right="8%" top="32%" p="27px" borderRadius="15px 0px 15px 0px">
            <Text fontSize="18px" mb={4} color="#3aa6b9" pt="5%">
              Welcome to Inner
            </Text>
            <Heading id="primary__font" fontSize="4xl" mb={4} color="white">
              INNOVATIVE IDEAS STYLISH designs
            </Heading>
            <Text fontSize="15px" mt="7" color="white">
              lorep ipsum musquoito de anufalir consequences de amular gpurt, lorep ipsum musquoito de anufalir consequences de amular gpurt,lorep ipsum musquoito de anufalir consequences de amular gpurt
              <Flex as="button" p="12px" bgColor="transparent" boxShadow="none" borderRadius="0px 20px 0px 20px" mt="8%" w="200px" fontSize="18px" color="white" alignItems="center" justifyContent="center" _hover={{ bgColor: "#2a8c9b" }}>
                <Text mr="8px" color="white">
                  Read More
                </Text>
                <Icon as={FaArrowRight} filter="invert(1)" />
              </Flex>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const InfiniteLoopImage = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;


export const AboutDetail = () => {
  const [activeTabVision, setActiveTabVision] = useState('vision');
  const [animationClass, setAnimationClass] = useState('');
  const [activePopover, setActivePopover] = useState(null);
  const handleTabActive = (tab) => {
    setActiveTabVision(tab);
  }

  useEffect(() => {
    setAnimationClass('slide-in');
    const timeoutId = setTimeout(() => setAnimationClass(''),);
    return () => clearTimeout(timeoutId);
  }, [activeTabVision])

  const handleMouseEnter = (index) => {
    setActivePopover(index);
  };

  const handleMouseLeave = () => {
    setActivePopover(null);
  };

  

  return (
    <>
      <Container maxW="10xl" h="400vh">
        {/* WHY US */}

        <Box w="89%" h="78vh" m="auto">
          <WHYUS />
        </Box>

        {/* ABOUT */}

        <Box w="88%" h="100%" m="auto">
          <Box display="flex" justifyContent="space-between" w="100%" h="60vh" bgColor="white" mt="6%">
            <Box id="left" w="30%" h="100%">
              <Flex alignItems="center" gap="20px">
                <Box w="12px" h="12px" bgColor="#3aa6b9" borderRadius="50%" />
                <Text fontSize="18px" mr="8px">
                  About
                </Text>
              </Flex>
            </Box>
            <Box id="right" w="70%" h="100%">
              <Image src="public/images/logo baru 23.png" p="none" />
              <Text fontSize="30px" fontFamily="Lato, sans-serif" fontWeight="500" pt="3%">
                Founded in 2010, our studio started as a small team of design enthusiasts with big dreams. At Interim, were not just about creating beautiful spaces were about crafting stories and making dreams come true! Our passionate
                team of design enthusiasts loves turning ordinary rooms into extraordinary experiences, blending creativity with a touch of whimsy.
              </Text>
              <Text fontSize="30px" fontFamily="Lato, sans-serif" fontWeight="500" pt="3%">
                Founded in 2010, our studio started as a small team of design enthusiasts with big dreams. At Interim, were not just about creating beautiful spaces were about crafting stories and making dreams come true! Our passionate
                team of design enthusiasts loves turning ordinary rooms into extraordinary experiences, blending creativity with a touch of whimsy.
              </Text>
            </Box>
          </Box>

          <Box w="100%" h="30vh" overflow="hidden" position="relative" mt="5%">
            <Flex
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              gap="20px"
              whiteSpace="nowrap"
              animation={`${InfiniteLoopImage} ${ImageLoop.length * 2}s linear infinite`} 
            >
              {ImageLoop.concat(ImageLoop).map((image, index) => (
                <Box key={index} w="400px" h="100%" flexShrink={0}>
                  <Image src={image} alt={`Image ${index + 1}`} w="100%" h="100%" objectFit="cover" borderRadius="100px" />
                </Box>
              ))}
            </Flex>
          </Box>

          {/* NUMBERS */}

          <Box w="100%" h="75vh" m="auto" pt="5%">
            <Flex alignItems="center" gap="17px" mb={6}>
              <Box w="12px" h="12px" bgColor="#3aa6b9" borderRadius="50%" />
              <Text fontSize="18px" color="black">
                By Numbers
              </Text>
            </Flex>

            <Box w="100%" h="60vh" overflowY="auto">
              <Flex wrap="wrap" justify="center" gap={4}>
                {DataAboutByNumber.map((DataNumber, index) => (
                  <Card key={index} maxW="462px" h="400px" bgColor="#3aa6b9" boxShadow="md" borderRadius="md" p={6} display="flex" flexDirection="column">
                    <Heading display="flex" color="white" fontSize="75px" fontFamily="Montserrat, sans-serif">
                      <IncrementNumberAbout endNumber={parseInt(DataNumber.Number)} />
                      <Text color="white">+</Text>
                    </Heading>

                    <Heading color="white" size="2xl" fontSize="30px" pt="38%" fontFamily="Montserrat, sans-serif">
                      {DataNumber.Title}
                    </Heading>
                    <Text color="white" pt="5%" fontFamily="Lato, sans-serif">
                      {DataNumber.Description}
                    </Text>
                  </Card>
                ))}
              </Flex>
            </Box>
          </Box>

          {/* COLLASE */}

          {/* MISSION & VISION */}

          <Box w="100%" h="40vh" m="auto">
            <Box display="flex" justifyContent="center" alignItems="center" border="2px solid black" m="auto" w="250px" h="60px" borderRadius="20px">
              <Box w="50%" h="100%" textAlign="center" borderRadius="20px" bgColor={activeTabVision === "vision" ? "#3aa6b9" : "transparent"} onClick={() => handleTabActive("vision")}>
                <Text pt="10%" fontSize="20px" cursor="pointer" color={activeTabVision === "vision" ? "white" : "black"}>
                  Vision
                </Text>
              </Box>
              <Box w="50%" h="100%" textAlign="center" bgColor={activeTabVision === "mission" ? "#3aa6b9" : "transparent"} borderRadius="20px">
                <Text pt="10%" fontSize="20px" cursor="pointer" onClick={() => handleTabActive("mission")} color={activeTabVision === "mission" ? "white" : "black"}>
                  Mission
                </Text>
              </Box>
            </Box>
            <Box textAlign="center" className={animationClass}>
              {activeTabVision === "vision" && (
                <Text fontSize="26px" pt="5%" fontFamily="Lato, sans-serif" fontWeight="500">
                  Praesent mollis vestibulum tristique. Integer vitae aliquam enim. Duis auctor auctor pellentesque. Fusce auctor, urna sit amet vulputate maximus, lectus diam congue odio, at malesuada sapien massa sed velit. Phasellus sed
                  enim imperdiet, blandit diam eu, pellentesque urna. Nullam imperdiet nunc eget euismod maximus. Proin ut nibh ipsum.{" "}
                </Text>
              )}
              {activeTabVision === "mission" && (
                <Text fontSize="26px" pt="5%" fontFamily="Lato, sans-serif" fontWeight="500">
                  Sed vestibulum, dolor sit amet cursus faucibus, arcu enim hendrerit libero, et eleifend purus leo non justo. Nullam ut pulvinar velit. Donec eget dolor ante. Fusce eu imperdiet ante. Vestibulum sit amet dictum mauris, ut
                  porta libero. Curabitur nec consectetur elit. Fusce et libero leo.
                </Text>
              )}
            </Box>
          </Box>

          {/* VALUES */}

          <Box w="100%" h="50vh">
            <Box id="left" w="30%">
              <Flex alignItems="center" gap="20px">
                <Box w="12px" h="12px" bgColor="#3aa6b9" borderRadius="50%" />
                <Text fontSize="18px" mr="8px">
                  Our foundation
                </Text>
              </Flex>
            </Box>
            <Box w="100%" h="100%" m="auto">
              <Flex wrap="wrap" pt="5%" justifyContent="center">
                {DataOurFoundation.map((foundation, index) => (
                  <Box
                    key={index}
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMouseEnter(index)}
                    w="338px"
                    h="100px"
                    bgColor="#1C1C1C"
                    m="10px"
                    p="20px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Text fontSize="20px" fontWeight="bold" mb="10px" color="white">
                      {foundation.TitleModel}
                    </Text>
                    {activePopover === index && (
                      <Box position="absolute" top="100px" left="0" bgColor="white" w="300px" p="25px" boxShadow="md" borderRadius="xl" zIndex="10" animation={`${PopoverAnimation} 0.4s ease-in-out`}>
                        <Text>{foundation.ModelDescription}</Text>
                      </Box>
                    )}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>

          {/* CLIENT  */}
          <Box w="100%" h="30vh">
            <Box display="flex" alignItems="center" gap="15px" justifyContent="center">
              <Box w="12px" h="12px" bgColor="#3aa6b9" borderRadius="50%" />
              <Text>Our Client</Text>
            </Box>
            <Box>
              <Heading textAlign="center" pt="1%">
                Our Beloved Client
              </Heading>
              <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                {LogoAbout.map((logo, index) => (
                  <Box key={index} m={12} display="flex" alignItems="center">
                    <Image src={logo.src} alt={logo.alt} w="150px" h="auto" objectFit="contain" />
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
