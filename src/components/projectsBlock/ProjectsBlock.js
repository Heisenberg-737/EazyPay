import React from "react";
import "./projectsBlock.css";
import Modal from "../Modal/Modal";

const ProjectsBlock = (props) => {
  const triggeringFCN = () => {
    return <p>GO</p>;
  };
  return (
    <div className="projectsBlock">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{props.details.project}</h4>
        <Modal
          type="projectBlock"
          data={props.details}
          triggerFCN={triggeringFCN()}
        />
      </div>
    </div>
  );
};
export default ProjectsBlock;
