import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <h1>
          <span>Tech</span>Master
        </h1>
      </div>
      <div className="navbar__links-container">
        <p style={{ "--i": 5 }} className={activeLink === 1 ? "active" : ""}>
          <a href="#home" onClick={() => setActiveLink(1)}>
            Home
          </a>
        </p>
        <p style={{ "--i": 4 }} className={activeLink === 2 ? "active" : ""}>
          <a href="#home" onClick={() => setActiveLink(2)}>
            Services
          </a>
        </p>
        <p style={{ "--i": 3 }} className={activeLink === 3 ? "active" : ""}>
          <a href="#home" onClick={() => setActiveLink(3)}>
            About Us
          </a>
        </p>
        <p style={{ "--i": 2 }} className={activeLink === 4 ? "active" : ""}>
          <a href="#home" onClick={() => setActiveLink(4)}>
            Portfolio
          </a>
        </p>
        <p style={{ "--i": 1 }} className={activeLink === 5 ? "active" : ""}>
          <a href="#home" onClick={() => setActiveLink(5)}>
            Our Blog
          </a>
        </p>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-links">
            <p
              style={{ "--i": 1 }}
              className={activeLink === 1 ? "active" : ""}
            >
              <a href="#home" onClick={() => setActiveLink(1)}>
                Home
              </a>
            </p>
            <p
              style={{ "--i": 2 }}
              className={activeLink === 2 ? "active" : ""}
            >
              <a href="#home" onClick={() => setActiveLink(2)}>
                Services
              </a>
            </p>
            <p
              style={{ "--i": 3 }}
              className={activeLink === 3 ? "active" : ""}
            >
              <a href="#home" onClick={() => setActiveLink(3)}>
                About Us
              </a>
            </p>
            <p
              style={{ "--i": 4 }}
              className={activeLink === 4 ? "active" : ""}
            >
              <a href="#home" onClick={() => setActiveLink(4)}>
                Portfolio
              </a>
            </p>
            <p
              style={{ "--i": 5 }}
              className={activeLink === 5 ? "active" : ""}
            >
              <a href="#home" onClick={() => setActiveLink(5)}>
                Our Blog
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
