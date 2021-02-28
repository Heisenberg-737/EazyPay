import React, { useEffect, useState } from "react";
import EmployeeNavbar from "components/Navbars/EmployeeNavbar.js";
import EmployeeHeader from "components/Headers/EmployeeHeader.js";
import axios from "axios";
import { useAuth } from "../../context/Context";

function EmployeePage() {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("profile-page");
  //   return function cleanup() {
  //     document.body.classList.remove("profile-page");
  //   };
  // });
  useEffect(() => {
    console.log("currentUser : ", currentUser);
    axios
      .post("/backend/projectworking", {
        email: currentUser.email,
        uid: currentUser.uid,
      })
      .then((res) => {
        console.log("RESPONSE IS : ", res);
        let array = res.data;
        // setContent(array.slice(1, array.length - 1));
        setData(array[0]);
        axios
          .post("/backend/freeproject", {
            email: currentUser.email,
          })
          .then((res) => {
            console.log("res is --------", res);
            setContent(res.data);
          })
          .catch((err) => console.log(err));

        // setContent(res.data[1]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("CONTENT : ", content);
  console.log("CONTENT.DATA : ", content.data);
  return (
    <div>
      <EmployeeNavbar data={data} />
      <EmployeeHeader data={content} />
      {/* <div className="main"></div> */}
    </div>
  );
}

export default EmployeePage;
