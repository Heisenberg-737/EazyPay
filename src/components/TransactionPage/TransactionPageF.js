import React from "react";

import EmployeeNavbar from "components/Navbars/EmployeeNavbar.js";
import TransactionHeader from "components/Headers/TransactionHeader.js";

function TransactionPageE() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <EmployeeNavbar />
      <TransactionHeader />
      <div className="main"></div>
    </>
  );
}

export default TransactionPageE;
