import { useEffect, useRef, useState } from "react";
import { Features } from "../../components";
import "./feature.css";

const Feature = () => {
  const [visible, setVisible] = useState(false);
  const featureRef = useRef();
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

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={featureRef}
      className={`feature ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <Features
        title="Who are We?"
        text="TechMaster Solutions is a leading technology firm offering a comprehensive range of services and expertise to empower businesses and individuals in their digital endeavors. With a strong focus on innovation and customer satisfaction, our company takes pride in delivering top-notch solutions across various industries."
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100vw",

          gap: "4rem",
        }}
        bodyStyle={{ maxWidth: "50%" }}
      />

      <div className="feature__content">
        <h1>Empowering Your Digital Journey with Cutting-Edge Innovation</h1>
        <p>Learn More</p>
      </div>
      <div className="feature__container">
        <Features
          title="Web Development"
          text="We specialize in creating dynamic and visually captivating websites that provide a seamless user experience and drive engagement. From corporate websites to e-commerce platforms, we tailor our solutions to meet specific business goals."
        />
        <Features
          title="Mobile App Development"
          text="Our skilled mobile app developers craft intuitive and feature-rich applications for both iOS and Android platforms. We leverage the latest technologies to ensure optimal performance and user satisfaction."
        />
        <Features
          title="E-commerce Solutions"
          text="We enable businesses to establish a robust online presence through custom e-commerce platforms that facilitate secure transactions and enhance customer experience."
        />
      </div>
    </div>
  );
};

export default Feature;
