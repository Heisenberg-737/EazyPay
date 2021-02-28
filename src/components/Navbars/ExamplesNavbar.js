import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../../images/EazyPay_Logo.png";

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

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
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
            to="/"
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
            style={{ background: "#ffcc26" }}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1 bars-black" />
            <span className="navbar-toggler-bar bar2 bars-black" />
            <span className="navbar-toggler-bar bar3 bars-black" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link to="register-page-e">
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Employer Register
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="register-page-f">
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Freelancer Register
                </NavLink>
              </Link>
            </NavItem>
            <Link to="login-page-e">
              <NavItem>
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Employer Login
                </NavLink>
              </NavItem>
            </Link>
            <Link to="login-page-f">
              <NavItem>
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Freelancer Login
                </NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
