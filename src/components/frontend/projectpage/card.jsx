import React from "react";

export const ProjectCard = ({ image, title }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <div className="overlay-content">
          <p className="overlay-title">{title}</p>
        </div>
      </div>
    </div>
  );
};
