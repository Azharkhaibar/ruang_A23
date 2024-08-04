import React from "react";
import { Box, Heading, Text, Flex, Image, Icon } from "@chakra-ui/react";
import { FaStar, FaCogs, FaLightbulb, FaPaintBrush } from "react-icons/fa";

export const WHYUS = (props) => {
    return (
        <>
            <Box>
                <Heading fontFamily="Montserrat, sans-serif" textAlign="center" fontSize="45px" fontWeight="600" pt="6%">
                    WHY US?
                </Heading>
                <Box
                    mt="4"
                    mx="auto"
                    w="200px"
                    h="10px"
                    bgImage="linear-gradient(120deg, rgba(255, 0, 0, 0.4) 30%, rgba(0, 255, 0, 0.4) 80%)"
                    bgSize="200% 200%"
                    bgRepeat="no-repeat"
                    borderRadius="50%"
                    transform="rotate(-5deg) scale(1.05)"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                    animation="brushstrokeAnimation 2s infinite alternate"
                >
                    <style>
                        {`
                            @keyframes brushstrokeAnimation {
                            0% { background-position: 0% 0%; }
                            100% { background-position: 100% 100%; }
                            }
                        `}
                    </style>
                </Box>
                <Box>
                    <Flex pt="4%">
                        <Box p="23px" w="400px" h="250px" bgColor="#1C1C1C" borderRadius=" 30px 0px 0px 0px">
                            <Icon as={FaStar} boxSize="40px" mb="2" filter="invert(1)" />
                            <Text fontSize="25px" color="white" fontFamily="Montserrat, sans-serif">
                                Expert Designers with Over 10 Years of Experience
                            </Text>
                        </Box>
                        <Image src="/images/ruang4.png" w="380px" h="250px" bgSize="cover" objectFit="cover" />
                        <Box p="23px" w="400px" h="250px" bgColor="#1C1C1C">
                            <Icon as={FaCogs} boxSize="40px" mb="2" filter="invert(1)" />
                            <Text fontSize="25px" color="white" fontFamily="Montserrat, sans-serif">
                                Customized Solutions Tailored to Your Needs
                            </Text>
                        </Box>
                        <Image src="/images/ruang4.png" w="380px" h="250px" bgSize="cover" objectFit="cover" borderRadius="0px 30px 0px 0px" />
                    </Flex>
                    <Flex>
                        <Image src="/images/ruang4.png" w="350px" h="250px" bgSize="cover" objectFit="cover" borderRadius="0px 0px 0px 30px" />
                        <Box p="23px" w="400px" h="250px" bgColor="#1C1C1C">
                            <Icon as={FaLightbulb} boxSize="40px" mb="2" filter="invert(1)" />
                            <Text fontSize="25px" color="white" fontFamily="Montserrat, sans-serif">
                                Innovative Designs that Maximize Space and Functionality
                            </Text>
                        </Box>
                        <Image src="/images/ruang4.png" w="350px" h="250px" bgSize="cover" objectFit="cover" />
                        <Box p="23px" w="400px" h="250px" bgColor="#1C1C1C" borderRadius="0px 0px 30px 0px">
                            <Icon as={FaPaintBrush} boxSize="40px" mb="2" filter="invert(1)" />
                            <Text fontSize="25px" color="white" fontFamily="Montserrat, sans-serif">
                                High-Quality Materials and Finishes
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};
