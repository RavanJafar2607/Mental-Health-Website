import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerLogoOxcare">
            <h2>OXCARE</h2>
          </div>
          <p>
            Eu sit proin amet quis malesuada vitae elit. <br /> Vel consectetur
            nibh quis ullamcorper quis. <br /> Quam enim tortor, id sed
          </p>
          <div className="socialIcon">
            <a href="https://www.facebook.com/">
              <FaFacebook />{" "}
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />{" "}
            </a>
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedin />{" "}
            </a>
            <a href="https://x.com/">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footerContent">
          <div className="footerLogo">
            <h2>Quick Links</h2>
          </div>
          <div className="footerDiv">
            <NavLink to={"/"} className="links">
              Home
            </NavLink>
            <NavLink to={"/about"} className="links">
              About
            </NavLink>
            <NavLink to={"/doctors"} className="links">
              Doctors
            </NavLink>
            <NavLink to={"/services"} className="links">
              Services
            </NavLink>
            <NavLink to={"/medicines"} className="links">
              Medicines
            </NavLink>
            <NavLink to={"/contact"} className="links">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="footerContent">
          <div className="footerLogo">
            <h2>Services</h2>
          </div>
          <div className="footerDiv">
            <p>Vaccination</p>
            <p>NDD</p>
            <p>Filled Prescription As Is</p>
            <p>Patient Referral</p>
            <p>Other Roofing</p>
          </div>
        </div>
        <div className="footerContent">
          <div className="footerLogo">
            <h2>Location</h2>
          </div>
          <div className="footerDiv">
            <p>
              2972 Westheimer Rd. <br /> Santa Ana, Illinois 85486
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
