import React, { useEffect, useState } from "react";
import "./header.css";
import ProjectsBlock from "components/projectsBlock/ProjectsBlock";
import { useAuth } from "../../context/Context";

function EmployeeHeader(props) {
  let pageHeader = React.createRef();
  console.log("PROPS IN EMPLOYEE HEADER IS : ", props);
  const { getHex } = useAuth();
  // const [projectDetails, setProjectsDetails] = useState([
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  //   {
  //     name: "Project Name",
  //     description:
  //       "project description project description project description project description project description project description project description project description ",
  //   },
  // ]);
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div style={{ backgroundColor: "#f8a1d1", backgroundSize: "cover" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-200px",
        }}
      >
        <div className="blobmaker-one">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFD6E8"
              d="M48.8,-50.7C63.6,-34.1,76,-17,75.7,-0.3C75.4,16.5,62.5,33,47.8,44.6C33,56.2,16.5,62.8,0.4,62.4C-15.7,62,-31.5,54.6,-46,43C-60.4,31.5,-73.7,15.7,-73.6,0C-73.6,-15.6,-60.2,-31.3,-45.8,-47.9C-31.3,-64.5,-15.6,-82.1,0.7,-82.8C17,-83.5,34.1,-67.3,48.8,-50.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="blobmaker-two" style={{ marginTop: "10px" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFD6E8"
              d="M37,-52.7C46.5,-44.1,51.6,-31.3,53.3,-19C55,-6.7,53.3,5,53.2,21C53.2,37.1,54.8,57.4,46.2,71.3C37.7,85.2,18.8,92.5,-0.4,93C-19.5,93.5,-39.1,87.1,-51.9,74.6C-64.8,62.1,-70.9,43.6,-75.4,25.5C-80,7.4,-82.9,-10.3,-76.5,-23.3C-70.1,-36.3,-54.3,-44.6,-40,-51.6C-25.7,-58.7,-12.8,-64.4,0.5,-65C13.8,-65.7,27.6,-61.3,37,-52.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <div
        className="page-header"
        style={{
          backgroundColor: "#fff",
          marginTop: "-300px",
        }}
        data-parallax={true}
        ref={pageHeader}
      >
        <div
          className="employeeHeader_content"
          style={{
            marginLeft: "0px",
            marginRight: "0px",
            zIndex: "10000",
          }}
        >
          <h1>My Current Projects</h1>
          <br />
          {getHex() && (
            <div
              style={{
                padding: "10px",
                margin: "3px",
                backgroundColor: "#00ff00",
                color: "#fff",
                border: "1px solid ",
                borderRadius: "10px",
              }}
            >
              <h5>HEX is : {getHex()}</h5>
            </div>
          )}
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            {props.data &&
              props.data.map((details, index) => {
                console.log("details : ", details);
                return <ProjectsBlock key={index} details={details} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHeader;
