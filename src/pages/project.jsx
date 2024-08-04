import NavProject from "../components/frontend/projectpage/navproject";
import { ProjectSlide ,ProjectSection, FooterProject } from "../components/frontend/projectpage/projectsection";

const Project = () => {
  return (
    <div>
      <NavProject />
      <ProjectSlide />
      <ProjectSection />
      <FooterProject />
    </div>
  );
};

export default Project;
