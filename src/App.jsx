import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";
import ContactPage from "./pages/contact";
import { HowItWorks } from "./components/frontend/howitwork/howitwork";
import "./components/frontend/design/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/howitwork" element={<HowItWorks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
