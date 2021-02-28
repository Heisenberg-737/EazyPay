import React from "react";
import "./projectsBlock.css";
import Modal from "../Modal/Modal";

const EmployerProjects = (props) => {
  const triggeringFCN = () => {
    return <p>View</p>;
  };
  const payTriggeringFCN = () => {
    return <p style={{ color: "green" }}>Pay</p>;
  };
  console.log(props);
  return (
    <div className="projectsBlock">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{props.details.project}</h4>
        <Modal
          type="payToEmployee"
          data={props.details}
          triggerFCN={payTriggeringFCN()}
        />
        <Modal
          data={props.details}
          type="employerProjectsDetails"
          triggerFCN={triggeringFCN()}
        />
      </div>
    </div>
  );
};
export default EmployerProjects;
