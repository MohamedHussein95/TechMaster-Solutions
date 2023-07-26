import { useEffect, useRef, useState } from "react";
import "./footer.css";
import { BsTwitter, BsTiktok, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef();
  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={footerRef}
      className={`footer ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className={`footer__deal-container ${visible ? "animate" : ""}`}>
        <h1>SPECIAL FRIDAY OFFER 15%</h1>
        <button> Request Service</button>
      </div>
      <div className="footer__content-container">
        <div className="footer__logo-container">
          <div className="footer__logo-title">
            <h2 className="footer__logo-title--tech">Tech</h2>
            <h2 className="footer__logo-title--master">Master</h2>
          </div>

          <p>All rights reserved</p>
          <div className="footer__socials">
            <div style={{ "--k": 1 }}>
              <FaFacebookF />
            </div>
            <div style={{ "--k": 2 }}>
              <BsInstagram />
            </div>
            <div style={{ "--k": 3 }}>
              <BsTiktok />
            </div>
            <div style={{ "--k": 4 }}>
              <BsTwitter />
            </div>
          </div>
        </div>
        <div
          className={`footer__items ${visible ? "animate" : ""}`}
          style={{ visibility: visible ? "visible" : "hidden", "--i": 1 }}
        >
          <h2>Links</h2>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 1 }}>
            <a>Services</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 2 }}>
            <a>About Us</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 3 }}>
            <a>Portfolio</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 4 }}>
            <a>Contact</a>
          </p>
        </div>
        <div
          className={`footer__items ${visible ? "animate" : ""}`}
          style={{ visibility: visible ? "visible" : "hidden", "--i": 2 }}
        >
          <h2>Company</h2>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 5 }}>
            <a>Terms & Conditions</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 6 }}>
            <a>Privacy Policy</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 7 }}>
            <a>Contact</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 8 }}>
            <a>Jobs</a>
          </p>
        </div>
        <div
          className={`footer__items ${visible ? "animate" : ""}`}
          style={{ visibility: visible ? "visible" : "hidden", "--i": 3 }}
        >
          <h2>Services</h2>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 9 }}>
            <a>IT Consulting</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 9 }}>
            <a> Web Development</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 10 }}>
            <a>Mobile App Development</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 11 }}>
            <a>Designing</a>
          </p>
        </div>
        <div
          className={`footer__items ${visible ? "animate" : ""}`}
          style={{ visibility: visible ? "visible" : "hidden", "--i": 4 }}
        >
          <h2>Contact</h2>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 12 }}>
            <a>Diamond Parkland,4th Floor 3rd Parklands Ave,Nairobi</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 13 }}>
            <a>+254 780 002 547</a>
          </p>
          <p className={`${visible ? "animate" : ""}`} style={{ "--j": 14 }}>
            <a>info@techmastersolutions.com</a>
          </p>
        </div>
      </div>
      <div className="footer__divider" />
      <div className="footer__copyrights">
        <p>© 2023 TechMaster Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
