import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Heading, Image, Flex, FormControl, FormLabel, Input, Textarea,  Button } from "@chakra-ui/react";
import { FooterProject } from "../projectpage/projectsection";

export const NavbarContact = () => {
    return (
      <div className="contact">
        <motion.div id="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="navbar-container">
            <div className="logo">
              <img src="/public/image/logoruang32.png" alt="logo ruang 32" style={{ filter: "none" }} />
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
              <img src="/public/image/search.png" alt="iconSearch" />
            </div>
          </div>
        </motion.div>
      </div>
    );
}

export const ContactOI = () => {
  return (
    <>
      <Box w="100%" h="120vh" pos="relative">
        {/* Konten utama dengan gambar dan overlay */}
        <Box position="absolute" width="90%" height="700px" left="0" right="0" margin="auto" overflow="hidden" zIndex="-1">
          <Image src="/public/images/pictunutkcontact.png" width="100%" height="100%" objectFit="cover" borderRadius="0 0 9999px 9999px" pos="absolute" />
          <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(86, 231, 219, 0.7)" borderRadius="0 0 9999px 9999px" />
          {/* Heading dan teks deskripsi */}
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -110%)" textAlign="center" color="white" zIndex="1">
            <Heading fontSize={["48px", "60px"]} mb="4" color="white" fontFamily="Montserrat, sans-serif">
              Get a Free Consultation
            </Heading>
            <Box maxW="600px" mx="auto">
              <Heading fontSize="20px" fontWeight="400" color="white" fontFamily="Lato, sans-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula lacus nec dolor vestibulum, vitae condimentum sapien facilisis.
              </Heading>
            </Box>
          </Box>
        </Box>

        {/* Form control di bawah heading */}
        <Box width={["90%", "60%"]} maxW="800px" backgroundColor="white" zIndex="1" mx="auto" pos="absolute" top={["70%", "50%"]} borderRadius="20px" left="50%" transform="translate(-50%, -20%)" boxShadow="0px 20px 30px rgba(0, 0, 0, 0.1)">
          <Box p="6">
            <Heading size="lg" mb="4" textAlign="center" fontFamily="Montserrat, sans-serif">
              Contact Us
            </Heading>
            {/* Formulir */}
            <form>
              <FormControl id="name" isRequired mb="4">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your name" />
              </FormControl>

              <FormControl id="email" isRequired mb="4">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl id="phone" isRequired mb="4">
                <FormLabel>Phone</FormLabel>
                <Input type="tel" placeholder="Enter your phone number" />
              </FormControl>

              <FormControl id="message" isRequired mb="4">
                <FormLabel>How can we help you?</FormLabel>
                <Textarea placeholder="Describe your issue or question" />
              </FormControl>

              {/* Tombol submit */}
              <Button colorScheme="teal" size="lg" borderRadius="30px" type="submit" w="100%" fontFamily= "Lato, sans-serif">
                Get Consultant now
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const MapContact = () => {
  return (
    <Box width="100%" height="70vh">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Box w="60%" h="100%" position="relative">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31725.74430723351!2d106.61999848293921!3d-6.300731679190677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4d685711251%3A0xd2b7d311159b167f!2sBSD%20City%20Marketing%20Office!5e0!3m2!1sid!2sid!4v1721228567832!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box w="50%" h="100%" bgColor="rgba(86, 231, 219, 0.7)">

        </Box>
      </Flex>
    </Box>
  );
};

class Contact extends React.Component {
  render() {
    return (
      <>
        <NavbarContact />
        <ContactOI />
        <MapContact />
        <FooterProject />
      </>
    );
  }
}

export default Contact;
