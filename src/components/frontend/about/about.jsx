import React, { useState, useEffect} from "react";
import { 
    Box, 
    Heading,
    Text,
    Container,
    Divider,
    Flex,
    Image
} from "@chakra-ui/react";
import '../design/about.css'
import { NavAbout } from "./navabout";
import { AboutStoryPage, AboutDetail } from "./aboutlayout/layoutabout";

export const AboutPage = () => {
  const BannerTxtBg = {
    textureBg: "/images/texturebg/christopher-burns-Kj2SaNHG-hg-unsplash.jpg"
  }
    return (
      <>
        <NavAbout />
        <Box w="100%" h="500vh">
          <Container maxW="10xl" h="60vh" pos="relative">
            <Image src="" pos="absolute" w="600px" h="auto" opacity="0.2" />
            <Box
              pos="relative"
              zIndex="2"
              bgSize="cover"
              bgPosition="center"
              height="100%"
              color="white"
              textAlign="left"
              w="50%"
              sx={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)",
              }}
            >
              <Heading fontSize="6xl" fontWeight="bold" pt={60} px={40} color="black" fontFamily="Montserrat, sans-serif">
                Tentang Kami
                <Text fontSize="18px" fontWeight="500" pt={5} color="black">
                  Pelajari lebih lanjut tentang kami, jelajahi budaya kami, dan cari tahu cara kami bekerja.
                </Text>
              </Heading>
            </Box>
          </Container>
          <AboutStoryPage />
          <AboutDetail />
        </Box>
      </>
    );
}
