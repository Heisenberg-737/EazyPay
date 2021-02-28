import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import logo from "../images/EazyPay_Logo.png";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <img src={logo} height="300px" width="auto" />
        <img src={logo} height="300px" width="auto" />
        <img src={logo} height="300px" width="auto" />
        <img src={logo} height="300px" width="auto" />
        <img src={logo} height="300px" width="auto" />
        <img src={logo} height="300px" width="auto" />
      </div>
    </>
  );
}

export default Index;
