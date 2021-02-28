import React, { useState } from "react";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { setUserDetails } from "../../Data/data";
import { useAuth } from "context/Context";

function LoginPage() {
  const history = useHistory();
  const { login, setLoggedInUserDetails } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let t = await login(user.email, user.password);
      user.uid = t.user.uid;
      let sendingUser = user;
      delete sendingUser.password;
      console.log(sendingUser);
      axios
        .post("/backend/freelogin", sendingUser)
        .then((res) => {
          console.log("Response is : ", res);
          setLoggedInUserDetails(res.data[0]);
          history.push("/employeePage");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
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
                <h3 className="title mx-auto">Freelancer Login</h3>
                <Form className="register-form" onSubmit={handleSubmit}>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <Button block className="btn-round" color="danger">
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
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

export default LoginPage;
