import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/Context";
import "firebase/auth";
import axios from "axios";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  const history = useHistory();
  const { signup } = useAuth();
  document.documentElement.classList.remove("nav-open");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  const registerForm = async (e) => {
    e.preventDefault();
    try {
      let t = await signup(user.email, user.password);
      console.log(t.user.uid);
      user.uid = t.user.uid;
      let sendingUser = user;
      delete sendingUser.password;
      axios
        .post("/backend/empprofile", sendingUser)
        .then((res) => {
          console.log(res);
          history.push("/employerPage");
        })
        .catch((err) => console.log(err));
      // history.push("/employerPage");
    } catch (err) {
      console.log("Error is : ", err);
    }
  };
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundColor: "#faca9b",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col
              className="ml-auto mr-auto  animate__animated animate__lightSpeedInLeft"
              lg="4"
            >
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Employer Register</h3>
                <Form className="register-form" onSubmit={registerForm}>
                  <label>Name</label>
                  <Input
                    onChange={handleChange}
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={user.name}
                  />
                  <label>Email</label>
                  <Input
                    onChange={handleChange}
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={user.email}
                  />

                  <label>Password</label>
                  <Input
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                  />
                  <label>Address</label>
                  <Input
                    onChange={handleChange}
                    placeholder="text"
                    type="text"
                    name="address"
                    value={user.address}
                  />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RegisterPage;
