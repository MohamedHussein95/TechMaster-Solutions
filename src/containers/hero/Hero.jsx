import { useEffect, useRef, useState } from "react";
import hero from "../../assets/hero_img.png";
import "./hero.css";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef();
  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={heroRef}
      className={`hero   ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="hero__content  ">
        <h1>
          Introducing TechMaster Solutions - Your Path to Technological
          Excellence!
        </h1>
        <p>
          We are a team of passionate web developers dedicated to creating
          stunning and user-friendly websites.
        </p>
        <div className="hero__content-btns">
          <button className="hero__content-btns-vteam">View Our Team</button>
          <button className="hero__content-btns-freecons">
            Free Consultation
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
