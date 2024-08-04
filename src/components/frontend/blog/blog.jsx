import "../design/blog.css";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { posts } from "../../../data/metadata";
import { Button } from "@chakra-ui/react";
import { Box, Text, Heading, Flex, Divider, Image, Container } from "@chakra-ui/react";
import { blogDataCard } from "../../../data/metadata";

const NavBlog = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const myRef = useRef();
  const IsInView = useInView(myRef, { once: false, threshold: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoruang32 = {
    logoImg: "/public/image/logoruang32.png",
    iconNavbar: "/public/image/search.png",
  };

  return (
    <>
      <motion.div id="navbar-blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={myRef}>
        <div className={isScrolled ? "navbar-container-blog scrolled" : "navbar-container-blog"}>
          <div className="logo-blog">
            <img src={logoruang32.logoImg} alt="logo ruang 32" />
          </div>
          <ul className="navbar-ul-blog">
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
          <div className="logo-icon-blog">
            <img src={logoruang32.iconNavbar} alt="iconSearch" />
          </div>
        </div>
      </motion.div>
      <div id="banner-blog">
        <div className="banner-blog-container">
          <div className="banner-blog-overlay"></div>
          <div className="banner-blog-item">
            <Link to="/">
              <h4>HOME</h4>
            </Link>
            <span></span>
            <Link to="/blog">
              <h4>BLOG</h4>
            </Link>
          </div>
          <div className="banner-blog-item-two">
            <h2>Our Blog</h2>
          </div>
        </div>
      </div>
      <div id="blog-wrapper">
        <div className="blog-section">
          <div className="blog-section-container">
            <div className="blog-section-left">
              <h2>5 Inspirasi Model Gorden Minimalis yang Bikin Hunian Lebih Mewah</h2>
              <img src="/public/image/showroom 1.jpg" />
              <div className="date-blog">
                <h3>January 23, 2024</h3>
                <h3>RuangA32</h3>
              </div>
              <div className="blog-description">
                <h2>Resolusi Ide Interior untuk tahun depan</h2>
                <p>
                  Anda telah melihat semua papan Pinterest dan foto Instagram rumah orang yang terlihat seperti langsung dari majalah. Kamar-kamarnya cerah dan lapang, dengan perabotan bergaya sempurna tetapi juga banyak ruang untuk
                  berkumpul. Mereka juga tampak selalu bersih—dan itu bukan hanya karena orang-orang itu menyewa pembersih profesional! Anda dapat memiliki tampilan itu di rumah Anda sendiri dengan
                </p>
                <button>
                  <span>Read More</span>
                  <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black"></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="blog-section-container">
            <div className="blog-section-left">
              <h2>5 Inspirasi Model Gorden Minimalis yang Bikin Hunian Lebih Mewah</h2>
              <img src="/public/image/showroom 1.jpg" />
              <div className="date-blog">
                <h3>January 23, 2024</h3>
                <h3>RuangA32</h3>
              </div>
              <div className="blog-description">
                <h2>Resolusi Ide Interior untuk tahun depan</h2>
                <p>
                  Anda telah melihat semua papan Pinterest dan foto Instagram rumah orang yang terlihat seperti langsung dari majalah. Kamar-kamarnya cerah dan lapang, dengan perabotan bergaya sempurna tetapi juga banyak ruang untuk
                  berkumpul. Mereka juga tampak selalu bersih—dan itu bukan hanya karena orang-orang itu menyewa pembersih profesional! Anda dapat memiliki tampilan itu di rumah Anda sendiri dengan
                </p>
                <button>
                  <span>Read More</span>
                  <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black"></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="blog-section-container">
            <div className="blog-section-left">
              <h2>5 Inspirasi Model Gorden Minimalis yang Bikin Hunian Lebih Mewah</h2>
              <img src="/public/image/showroom 1.jpg" />
              <div className="date-blog">
                <h3>January 23, 2024</h3>
                <h3>RuangA32</h3>
              </div>
              <div className="blog-description">
                <h2>Resolusi Ide Interior untuk tahun depan</h2>
                <p>
                  Anda telah melihat semua papan Pinterest dan foto Instagram rumah orang yang terlihat seperti langsung dari majalah. Kamar-kamarnya cerah dan lapang, dengan perabotan bergaya sempurna tetapi juga banyak ruang untuk
                  berkumpul. Mereka juga tampak selalu bersih—dan itu bukan hanya karena orang-orang itu menyewa pembersih profesional! Anda dapat memiliki tampilan itu di rumah Anda sendiri dengan
                </p>
                <button>
                  <span>Read More</span>
                  <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="right_blog_section">
          <h2>Recent Post</h2>
          <div className="right_blog_container">
            {posts.map((post, index) => (
              <div key={index} className="right_blog_recent_post">
                <img src={post.imgSrc} alt="Blog Post" />
                <div className="desc_recent_post">
                  <h2>{post.title}</h2>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div class="card">
            <a class="socialContainer containerOne" href="#">
              <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>
            </a>

            <a class="socialContainer containerFive" href="https://www.youtube.com/channel/your-channel-id">
              <svg viewBox="0 0 24 24" class="socialSvg youtubeSvg">
                <path d="M23.998 7.622s-.2-1.396-.826-1.967c-.76-.76-1.63-.762-2.032-.809C17.212 5 12.005 5 12.005 5s-5.207 0-9.136.846c-.402.047-1.272.049-2.032.81-.626.57-.826 1.967-.826 1.967S0 9.525 0 11.525v.95c0 2 2.007 2 2.007 2h1.646s1.33-.038 2.003-.062c.67-.02 1.673-.034 2.673-.034s2.002.014 2.673.034c.672.024 2.002.062 2.002.062h1.646s2.007 0 2.007-2v-.95c0-2-2.007-2-2.007-2h-.002zm-15.996 5.375V8.2l5.615 2.899-5.615 2.898z"></path>
              </svg>
            </a>

            <a class="socialContainer containerSix" href="https://id.pinterest.com/your-account/">
              <svg viewBox="0 0 24 24" class="socialSvg pinterestSvg">
                <path d="M12 0c-6.628 0-12 5.372-12 12 0 5.29 3.384 9.793 8.104 11.484-.116-.977-.22-2.483.045-3.56.239-1.027 1.54-6.522 1.54-6.522s-.393-.789-.393-1.95c0-1.827 1.059-3.186 2.377-3.186 1.119 0 1.663.841 1.663 1.848 0 1.127-.719 2.817-1.092 4.375-.314 1.283.663 2.332 1.927 2.332 2.311 0 4.092-2.443 4.092-5.955 0-2.946-2.119-5.006-5.14-5.006-3.491 0-5.573 2.617-5.573 5.332 0 1.063.406 2.204.912 2.818.101.122.116.232.09.36-.101.429-.332 1.354-.378 1.539-.065.24-.244.291-.493.177-1.822-.785-2.962-3.062-2.962-5.167 0-4.333 3.225-9.332 9.606-9.332 5.006 0 8.602 3.663 8.602 7.576 0 4.732-2.982 8.641-7.144 8.641-1.392 0-2.69-.723-3.13-1.585l-.852 3.255c-.307 1.193-.115 2.655-.068 2.812.046.168.251.204.357.078.183-.207 2.526-2.948 2.855-3.546.405-1.041.788-2.633.455-4.121-.327-1.377-1.88-2.791-3.397-2.791-2.679 0-4.815 2.618-4.815 5.893 0 2.479 1.836 4.479 4.524 4.479 2.156 0 3.621-1.444 3.621-3.097 0-1.196-.469-1.969-1.079-3.126-.307-.614-.614-1.318-.614-2.113 0-1.614 1.176-2.93 2.755-2.93 1.433 0 2.507 1.07 2.507 2.474 0 1.805-.902 3.159-2.178 3.159-.866 0-1.562-.705-1.341-1.557.257-1.008.74-2.094.74-2.813 0-.65-.348-1.195-1.072-1.195-.85 0-1.527 1.055-1.527 2.465 0 .894.297 1.491.297 1.491l-1.094 4.174c-.326 1.252-.483 2.646-.495 2.82-.018.276.082.338.334.198 1.532-.82 2.181-3.003 2.181-4.694 0-3.581-2.102-6.563-6.054-6.563-3.997 0-7.178 3.432-7.178 7.573 0 3.117 2.077 5.482 4.923 5.482 1.872 0 3.465-1.242 3.465-2.846 0-1.049-.462-1.826-1.071-2.772-.309-.572-.66-1.184-.66-1.903 0-1.451 1.34-3.323 4.03-3.323 2.17 0 3.769 1.567 3.769 3.655 0 2.656-1.183 4.807-2.926 4.807-.99 0-1.797-.893-1.547-1.973.291-1.129.678-2.348.678-3.155 0-.727-.389-1.33-1.195-1.33-.948 0-1.7 1.146-1.7 2.679 0 .982.213 1.645.213 1.645l-.82 3.148c-.237.905-.352 1.912-.364 2.03-.02.242.11.296.296.162 1.083-.581 1.549-2.138 1.549-3.339 0-2.548-1.502-4.938-4.348-4.938-2.846 0-5.154 2.395-5.154 5.316 0 2.208 1.502 3.917 3.634 3.917 1.734 0 3.08-1.188 3.08-2.793 0-1.08-.458-1.787-1.055-2.774-.303-.531-.644-1.1-.644-1.758 0-1.342 1.243-3.065 3.697-3.065 1.997 0 3.436 1.456 3.436 3.317 0 1.213-.58 2.712-1.446 2.712-.583 0-1.006-.667-.858-1.45.164-.777.477-1.615.477-2.166 0-.498-.267-.912-1.032-.912-.819 0-1.468 1.005-1.468 2.348 0 .856.305 1.432.305 1.432l-1.145 4.371c-.351 1.348-.52 2.847-.532 3.034-.02.295.116.36.399.207 1.46-.783 2.084-2.872 2.084-4.493 0-3.433-2.014-6.293-5.804-6.293-3.819 0-6.863 3.276-6.863 7.214 0 2.983 1.989 5.207 4.746 5.207 1.801 0 3.336-1.197 3.336-2.753 0-1.03-.457-1.797-1.053-2.772-.303-.572-.646-1.18-.646-1.903 0-1.451 1.336-3.323 4.025-3.323 2.171 0 3.777 1.566 3.777 3.656 0 2.656-1.194 4.798-2.931 4.798-.992 0-1.795-.896-1.551-1.98.297-1.13.682-2.361.682-3.172 0-.724-.394-1.33-1.211-1.33-.964 0-1.725 1.147-1.725 2.677 0 .983.221 1.646.221 1.646l-.851 3.256c-.306 1.174-.468 2.518-.479 2.69-.018.265.1.326.343.188 1.519-.82 2.167-3.006 2.167-4.7 0-3.584-2.106-6.574-6.069-6.574z"></path>
              </svg>
            </a>

            <a class="socialContainer containerTwo" href="#">
              <svg viewBox="0 0 16 16" class="socialSvg twitterSvg">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>
            </a>

            <a class="socialContainer containerThree" href="#">
              <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a class="socialContainer containerFour" href="#">
              <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Container maxW="84%" py={4} h="120vh">
        <Heading pt="4%" fontFamily="Montserrat, sans-serif" textAlign="center" mb={10}>
          Featured Blog
        </Heading>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={6} pt="3%">
          {blogDataCard.map((DataBlog, IndexCard) => (
            <Box key={IndexCard} maxW="308px" w="100%" borderWidth="0.5px" borderRadius="lg" overflow="hidden" _hover={{ boxShadow: "lg" }} transition="all 0.3s">
              <Image src={DataBlog.imgDataBlog} alt={DataBlog.title} w="100%" h="200px" objectFit="cover" />
              <Box p={6}>
                <Heading fontSize="xl" mb={2} fontWeight="450">
                  {DataBlog.title}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>
                  {DataBlog.date}
                </Text>
                <Button colorScheme="teal" variant="solid" pt="auto" boxShadow="none" borderRadius="25px">
                  {DataBlog.btndesc}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

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
    </>
  );
};

export default NavBlog;
