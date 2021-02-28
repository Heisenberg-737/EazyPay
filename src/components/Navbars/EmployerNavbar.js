import React from "react";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
import logo from "../../images/EazyPay_Logo.png";
import Modal from "../Modal/Modal";
import { useAuth } from "../../context/Context";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function EmployerNavbar(props) {
  const history = useHistory();
  console.log("props is : ", props);
  const { userDetails, logout } = useAuth();
  console.log("userDetails : ", userDetails);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 20 ||
        document.body.scrollTop > 20
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 21 ||
        document.body.scrollTop < 21
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const transactionHistory = () => {
    return (
      <span style={{ marginLeft: "5px", cursor: "pointer" }}>
        Transaction History
      </span>
    );
  };
  const addNewProject = () => {
    return (
      <span style={{ marginLeft: "5px", cursor: "pointer" }}>
        Add new Contract
      </span>
    );
  };
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/employerPage"
            title="Coded by Creative Tim"
            style={{ padding: "0px" }}
            tag={Link}
          >
            <img src={logo} alt="logo" height="100px" width="auto" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span
              className="navbar-toggler-bar bar1"
              style={{ background: "#000" }}
            />
            <span
              className="navbar-toggler-bar bar2"
              style={{ background: "#000" }}
            />
            <span
              className="navbar-toggler-bar bar3"
              style={{ background: "#000" }}
            />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                <i className="nc-icon nc-book-bookmark" />
                <Modal
                  triggerFCN={addNewProject()}
                  data={props.data}
                  setData={props.setData}
                  type="addNewProject"
                />
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <Link to="/transactionHistory">
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Transaction History
                </NavLink>
              </Link>
            </NavItem> */}
            <NavItem>
              <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                <i className="nc-icon nc-book-bookmark" />
                Current Balance - {props.data.current_balance}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                <i className="nc-icon nc-book-bookmark" />
                {props.data.name}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#000000", cursor: "pointer" }}
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployerNavbar;
