import { useEffect, useRef, useState } from "react";
import "./brands.css";
import { google, atlassian, shopify, dropbox, slack } from "./import";
const Brand = () => {
  const [visible, setVisible] = useState(false);
  const brandRef = useRef();
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

    if (brandRef.current) {
      observer.observe(brandRef.current);
    }

    return () => {
      if (brandRef.current) {
        observer.unobserve(brandRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={brandRef}
      className={`brand ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="brand__img-container" style={{ "--o": 5 }}>
        <img src={google} alt="google" />
      </div>
      <div className="brand__img-container" style={{ "--o": 4 }}>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brand__img-container" style={{ "--o": 3 }}>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brand__img-container" style={{ "--o": 2 }}>
        <img src={slack} alt="slack" />
      </div>
      <div className="brand__img-container" style={{ "--o": 1 }}>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
