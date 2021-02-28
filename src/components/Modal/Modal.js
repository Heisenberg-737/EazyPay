import React, { useEffect, useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "./Modal.css";
import axios from "axios";
// import { getUserDetails } from "../../Data/data";
import { useAuth } from "../../context/Context";

function ModalExampleCloseIcon(props) {
  const { setNewHex } = useAuth();
  //States ------------------------------------------------States------------------------------
  const [open, setOpen] = useState(false);
  const [projectdetails, setProjectsDetails] = useState({
    emp_name: "",
    emp_email: "",
    project: "",
    date_started: "",
    deadline: "",
    days_hours_work: "",
    rate_day_hour: "",
    proposed_amount: "",
  });
  useEffect(() => {
    if (props.type === "projectBlock") {
      setProjectsDetails(props.data);
    }
  }, []);
  // props && props.type === "projectBlock" && setProjectsDetails(props.data);
  const [transferDetails, setTransferDetails] = useState({
    name: "",
    sendersAddress: "",
    amount: "",
    address: "",
    private_key: "",
  });
  const [newProject, setnewProject] = useState({
    emp_name: "",
    emp_email: "",
    free_name: "",
    free_email: "",
    project: "",
    date_started: "",
    deadline: "",
    no_days_hours: "",
    rate_day_hour: "",
    rate_for_leave_deduct: "",
    proposed_amount: "",
    free_address: "",
    private_key: "",
  });
  const [payToEmployeeDetails, setPayToEmployee] = useState({
    sno: "",
    no_of_leaves: "",
    // rate_for_leave_deduct: "",
    amount_paid: "",
    private_key: "",
  });
  // Changing Inputs-----------------------------------Changing Inputs-------------------------
  const handleChangeTransferDetails = (e) => {
    const { name, value } = e.target;
    setTransferDetails((prevTransferDetails) => {
      return {
        ...prevTransferDetails,
        [name]: value,
      };
    });
  };
  const handleChangeAddingNewProject = (e) => {
    const { name, value } = e.target;
    setnewProject((prevNewProject) => {
      return {
        ...prevNewProject,
        [name]: value,
      };
    });
  };
  const handleChangePayToEmployeeDetails = (e) => {
    const { name, value } = e.target;
    setPayToEmployee((prevPayToEmployeeDetails) => {
      return { ...prevPayToEmployeeDetails, [name]: value };
    });
  };
  // ModalContent---------------------------------------ModalContent----------------------------
  const sendToFriendsFamily = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={handleChangeTransferDetails}
          name="name"
          value={transferDetails.name}
        />
        <input
          type="text"
          placeholder="sendersAddress"
          onChange={handleChangeTransferDetails}
          name="sendersAddress"
          value={transferDetails.sendersAddress}
        />
        {/* <input
          type="text"
          placeholder="current balance"
          name="curr_balance"
          value={getUserDetails().balance}
        /> */}
        <input
          type="text"
          placeholder="amount to send"
          onChange={handleChangeTransferDetails}
          name="amount"
          value={transferDetails.amount}
        />
        <input
          type="text"
          placeholder="address"
          onChange={handleChangeTransferDetails}
          name="address"
          value={transferDetails.address}
        />
        <input
          type="text"
          placeholder="private key"
          onChange={handleChangeTransferDetails}
          name="private_key"
          value={transferDetails.private_key}
        />
      </form>
    );
  };
  const transactionHistory = () => {
    return (
      <form>
        <div>
          <p>Project </p>
          <input type="text " />
        </div>
        <div>
          <p>Work Started On</p>
          <input type="text " />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " />
        </div>
        <div>
          <p>No. of days/hours work</p>
          <input type="text " />
        </div>
        <div>
          <p>rate per hour</p>
          <input type="text " />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " />
        </div>
        <div>
          <p>No. of leaves/hours delayed </p>
          <input type="text " />
        </div>
        <div>
          <p>Amount paid</p>
          <input type="text " />
        </div>
        <div>
          <p>Rate for Leaves/hours delayed</p>
          <input type="text " />
        </div>
        <div>
          <p>Account of Employee</p>
          <input type="text " />
        </div>
      </form>
    );
  };
  const projectDetails = () => {
    return (
      <form>
        {/* <div>
          <p>S.No </p>
          <input type="text " value={projectdetails.sno} disabled />
        </div> */}
        <div>
          <p>Name </p>
          <input type="text " value={projectdetails.emp_name} disabled />
        </div>
        <div>
          <p>Email</p>
          <input type="text " value={projectdetails.emp_email} disabled />
        </div>
        <div>
          <p>Project Name</p>
          <input type="text " value={projectdetails.project} disabled />
        </div>
        <div>
          <p>Work started on</p>
          <input type="text " value={projectdetails.date_started} disabled />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " value={projectdetails.deadline} disabled />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input type="text " value={projectdetails.rate_day_hour} disabled />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input type="text " value={projectdetails.days_hours_work} disabled />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " value={projectdetails.proposed_amount} disabled />
        </div>
      </form>
    );
  };
  const employerCurrentProjects = () => {
    return (
      <form>
        <div>
          <p>Name </p>
          <input type="text " value={props.data.free_name} disabled />
        </div>
        <div>
          <p>Email</p>
          <input type="text " value={props.data.free_email} disabled />
        </div>
        <div>
          <p>Project Name</p>
          <input type="text " value={props.data.project} disabled />
        </div>
        <div>
          <p>Work started on</p>
          <input type="text " value={props.data.date_started} disabled />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " value={props.data.deadline} disabled />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input type="text " value={props.data.rate_day_hour} disabled />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input type="text " value={props.data.days_hours_work} disabled />
        </div>

        <div>
          <p>Proposed Amount</p>
          <input type="text " value={props.data.proposed_amount} disabled />
        </div>
      </form>
    );
  };
  const addNewProject = () => {
    return (
      <form>
        <div>
          <p>Employer Name </p>
          <input
            type="text "
            name="emp_name"
            value={newProject.emp_name}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Employer Email </p>
          <input
            type="text "
            name="emp_email"
            value={newProject.emp_email}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Freelance Name</p>
          <input
            type="text "
            name="free_name"
            value={newProject.free_name}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Freelance Email</p>
          <input
            type="text "
            name="free_email"
            value={newProject.free_email}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Project Name</p>
          <input
            type="text "
            name="project"
            value={newProject.project}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Work started on</p>
          <input
            type="date"
            name="date_started"
            value={newProject.date_started}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Deadline</p>
          <input
            type="date"
            name="deadline"
            value={newProject.deadline}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input
            type="text "
            name="rate_day_hour"
            value={newProject.rate_day_hour}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Deduction Rate</p>
          <input
            type="text "
            name="rate_for_leave_deduct"
            value={newProject.rate_for_leave_deduct}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input
            type="text "
            name="no_days_hours"
            value={newProject.no_days_hours}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input
            type="text "
            name="proposed_amount"
            value={newProject.proposed_amount}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Address of Freelancer</p>
          <input
            type="text "
            name="free_address"
            value={newProject.free_address}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Private Key</p>
          <input
            type="text "
            name="private_key"
            value={newProject.private_key}
            onChange={handleChangeAddingNewProject}
          />
        </div>
      </form>
    );
  };
  const payToEmployee = () => {
    return (
      <form>
        <div>
          <p>No. of Leaves</p>
          <input
            type="text "
            name="no_of_leaves"
            value={payToEmployeeDetails.no_of_leaves}
            onChange={handleChangePayToEmployeeDetails}
          />
        </div>
        {/* <div>
          <p>Rate for leave deduction</p>
          <input
            type="text "
            name="rate_for_leave_deduct"
            value={payToEmployeeDetails.rate_for_leave_deduct}
            onChange={handleChangePayToEmployeeDetails}
          />
        </div> */}
        <div>
          <p>Amount Paid</p>
          <input
            type="text "
            name="amount_paid"
            value={payToEmployeeDetails.amount_paid}
            onChange={handleChangePayToEmployeeDetails}
          />
        </div>
        <div>
          <p>Private Key</p>
          <input
            type="text "
            name="private_key"
            value={payToEmployeeDetails.private_key}
            onChange={handleChangePayToEmployeeDetails}
          />
        </div>
      </form>
    );
  };
  // Functions for ending Button ---------------------------Function for ending Button-----------
  const submitNewProject = (e) => {
    e.preventDefault();
    axios
      .post("/backend/addproject", newProject)
      .then((res) => {
        console.log(res);
        props.setData([...props.data, newProject]);
      })
      .catch((err) => console.log(err));
  };
  const submitTransferDetails = (e) => {
    e.preventDefault();
    axios
      .post("/backend/transfer", transferDetails)
      .then((res) => {
        console.log("HEX is : ", res.data[0].hex);
        setNewHex(res.data[0].hex);
      })
      .catch((err) => console.log(err));
  };
  const payToFreelancer = (e) => {
    e.preventDefault();
    console.log("DATA  : ", props.data);
    payToEmployeeDetails.sno = props.data.sno;
    axios
      .post("/backend/freepayment", payToEmployeeDetails)
      .then((res) => {
        console.log("HEX is : ", res.data[0].hex);
        setNewHex(res.data[0].hex);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      style={{
        zIndex: "100000",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "10%",
        height: "max-content",
      }}
      closeIcon
      open={open}
      trigger={props.triggerFCN}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        // icon="archive"
        content={
          props.type === "projectBlock"
            ? "Project Details"
            : props.type === "sendToFamilyFriends"
            ? "Send to Family And Friends"
            : props.type === "addNewProject"
            ? "Add new Project"
            : props.type === "employerProjectsDetails"
            ? "Appointed Freelancer"
            : props.type === "payToEmployee"
            ? "Pay to Freelancer"
            : props.type === "transactionHistory"
            ? "Your Transaction History"
            : ""
        }
      />
      <Modal.Content>
        {props.type === "projectBlock"
          ? projectDetails()
          : props.type === "sendToFamilyFriends"
          ? sendToFriendsFamily()
          : props.type === "addNewProject"
          ? addNewProject()
          : props.type === "employerProjectsDetails"
          ? employerCurrentProjects()
          : props.type === "payToEmployee"
          ? payToEmployee()
          : props.type === "transactionHistory"
          ? transactionHistory()
          : ""}
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          onClick={(e) => {
            setOpen(false);
            if (props.type === "addNewProject") {
              submitNewProject(e);
            } else if (props.type === "sendToFamilyFriends") {
              submitTransferDetails(e);
            } else if (props.type === "payToEmployee") {
              payToFreelancer(e);
            }
          }}
        >
          <Icon name="checkmark" />
          {props.type === "projectBlock"
            ? "Close"
            : props.type === "sendToFamilyFriends"
            ? "Send"
            : props.type === "addNewProject"
            ? "Create"
            : props.type === "employerProjectsDetails"
            ? "Back"
            : props.type === "payToEmployee"
            ? "Pay"
            : props.type === "transactionHistory"
            ? "Close"
            : ""}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
