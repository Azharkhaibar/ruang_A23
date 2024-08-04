import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Container } from "@chakra-ui/react";

export const BannerHowItWorks = () => {
    const [btnColorActive, setActiveBtnColor] = useState(false);

    const HandlerActiveBtnColor = (activeColor) => {
        setActiveBtnColor(activeColor);
    }
    return (
      <>
        <Container maxW="10xl" h="100vh" bgColor="grey">
          <Box>
            <Heading fontFamily="Montserrat, sans-serif" textAlign="center" pt="20%">
              RuangA23 Interior Design Process
              <Text pt="1%" fontSize="18px" fontWeight="500">The Easist way to design your space</Text>
              <Text color={HandlerActiveBtnColor == btnColorActive ? "#3aa6b9" : "#1C1C1C"} p="15px" textAlign="center" fontFamily="Monsterrat, sans-serif" fontSize="17px" pt="3%" bgColor="red" w="200px" h="50px" m="auto">
                Get Started
              </Text>
            </Heading>
          </Box>
        </Container>

        <Container maxW="10xl" h="500vh" bgColor="red">
          <Box></Box>
        </Container>
      </>
    );

}