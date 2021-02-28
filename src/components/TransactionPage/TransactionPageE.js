import React from "react";

import EmployerNavbar from "components/Navbars/EmployerNavbar.js";
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
      <EmployerNavbar />
      <TransactionHeader />
      <div className="main"></div>
    </>
  );
}

export default TransactionPageE;
