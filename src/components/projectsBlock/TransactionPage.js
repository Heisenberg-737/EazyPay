import React from "react";
import "./projectsBlock.css";
import Modal from "../Modal/Modal";

const TransactionPage = (props) => {
  // const [show, setShow] = useState(false);
  const triggeringFCN = () => {
    return <p>GO</p>;
  };
  return (
    <div className="projectsBlock">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{props.details.name}</h4>
        <Modal type="transactionHistory" triggerFCN={triggeringFCN()} />
      </div>
    </div>
  );
};
export default TransactionPage;
