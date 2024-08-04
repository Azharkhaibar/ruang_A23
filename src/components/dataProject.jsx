import React from "react";
import "../App.css";
import ProjectSection from "./frontend/projectpage/projectsection";

class DataProject extends React.Component {
  render() {
    const Dcollect = [
      {
        imgUrl1: "/public/image/phone-call.png",
        logo: "/public/image/logoruang32.png",
        email: "/public/image/email.png",
      },
      {
        imgUrl1: "/public/image/phone-call.png",
        logo: "/public/image/logoruang32.png",
        email: "/public/image/email.png",
      },
      {
        imgUrl1: "/public/image/phone-call.png",
        logo: "/public/image/logoruang32.png",
        email: "/public/image/email.png",
      },
    ];

    return (
      <div>
        <ProjectSection newDataCollect={Dcollect} />
      </div>
    );
  }
}

export default DataProject;
