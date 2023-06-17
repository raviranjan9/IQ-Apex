import "../styles/Navbar.css";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import Logo from "../assets/Top-Study-Abroad-Consultant-in-Bangladesh-e1646026721153.png";
import Globalwings_Success from "../assets/globalwings-Success.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const _Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-top-container">
        <div className="address1">
          <p>
            <RoomOutlinedIcon sx={{ color: "white", marginRight: ".5rem" }} />
            Head Office : Level-7, A Mazid Tower, Ka-24, Progoti Shoroni Rd,
            Dhaka
          </p>
        </div>
        <div className="address2">
          <p>
            <RoomOutlinedIcon sx={{ color: "white", marginRight: ".5rem" }} />
            Sylhet Office : Elegant Shopping Mall, Level-11 (Lift-10), Jallarpar
            Road, Sylhet
          </p>
        </div>
        <div className="time">
          <p>
            <ScheduleOutlinedIcon
              sx={{ color: "white", marginRight: ".5rem" }}
            />
            Sat - Fri : 9AM - 7PM
          </p>
        </div>
      </div>
      <div className="navbar-center-container">
        <div className="logo">
          <img alt="" src={Logo} style={{ marginRight: "2rem" }} />
          <img alt="" src={Globalwings_Success} />
        </div>
        <div className="text">Study Abroad Agency in Bangladesh Since 1997</div>
        <div className="social-links">
          <Link to="">
            {
              <FacebookIcon
                sx={{ color: "black", fontSize: "2rem", marginLeft: ".5rem" }}
              />
            }
          </Link>
          <Link to="">
            {
              <TwitterIcon
                sx={{ color: "black", fontSize: "2rem", marginLeft: ".5rem" }}
              />
            }
          </Link>
          <Link to="">
            {
              <InstagramIcon
                sx={{ color: "black", fontSize: "2rem", marginLeft: ".5rem" }}
              />
            }
          </Link>
          <Link to="">
            {
              <LinkedInIcon
                sx={{ color: "black", fontSize: "2rem", marginLeft: ".5rem" }}
              />
            }
          </Link>
          <Link to="">
            {
              <YouTubeIcon
                sx={{ color: "black", fontSize: "2rem", marginLeft: ".5rem" }}
              />
            }
          </Link>
        </div>
        <div className="appointment-btn">
          <button className="btn">Book an appointment</button>
        </div>
      </div>
      <div className="navbar-bottom-container">
        <div className="logo">
          <img alt="" src={Logo} style={{ marginRight: "2rem" }} />
          <img alt="" src={Globalwings_Success} />
        </div>
        <Navbar
          expand="lg"
          className="nav"
          style={{ backgroundColor: "#0327D5" }}
        >
          <Container>
            <Navbar.Toggle style={{ margin: "0 auto", fontSize: "2rem", color: "white" }}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mx-auto"
                style={{ margin: "0 auto", fontSize: "2rem", color: "white" }}
              >
                <Nav.Link href="#home">HOME</Nav.Link>
                <NavDropdown title="ABOUT">
                  <NavDropdown.Item href="#action/3.1">
                    COMPANY PROFILE
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    CHAIRMAN MESSAGE
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    WHY CHOOSE US
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    OUR MISSION AND VISION
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">SERVICES</Nav.Link>
                <NavDropdown title="STUDY ABROAD" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    AUSTRALIA
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    {" "}
                    CANADA
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    MALAYSIA
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">USA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">UK</NavDropdown.Item>
                  <NavDropdown title="EUROPE" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      FINLAND
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      GERMANY
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      SWEDEN
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      POLAND
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      ITLAY
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link href="#link">BLOG</Nav.Link>
                <NavDropdown title="CONTACT" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    APPLY NOW
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">CAREER</Nav.Link>
                <Nav.Link onClick={() => navigate("login")}>LOGIN</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default _Navbar;
