import React, { useState, useEffect } from "react";

import EmployerNavbar from "components/Navbars/EmployerNavbar.js";
import EmployerHeader from "components/Headers/EmployerHeader.js";
import axios from "axios";
// import { getUserDetails } from "../../Data/data";
import { useAuth } from "../../context/Context";

function EmployerPage() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState();
  const { currentUser } = useAuth();
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  useEffect(() => {
    console.log("currentUser : ", currentUser);
    axios
      .post("/backend/freeworking", {
        email: currentUser.email,
        uid: currentUser.uid,
      })
      .then((res) => {
        // console.log(res);
        console.log(res);
        setData(res.data[0]);
        setContent(res.data.slice(1, res.data.length));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("Content : ", content);
  // useEffect(() => {
  //   axios
  //     .post("/backend/freeworking", { email: currentUser.email })
  //     .then((res) => {
  //       // console.log(res);
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [data]);
  return (
    <>
      <EmployerNavbar data={data} setData={setContent} />
      <EmployerHeader data={content} />
    </>
  );
}

export default EmployerPage;
