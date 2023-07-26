import { useEffect, useRef, useState } from "react";
import Email from "../../components/email/Email";
import "./subscribe.css";

const Subscribe = () => {
  const [visible, setVisible] = useState(false);
  const subsRef = useRef();
  useEffect(() => {
    const options = {
      threshold: 1, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (subsRef.current) {
      observer.observe(subsRef.current);
    }

    return () => {
      if (subsRef.current) {
        observer.unobserve(subsRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={subsRef}
      className={`subscribe ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="subscribe__header">
        <h1>Subscribe Now</h1>
        <p>Get Exclusive deals,news and updates</p>
      </div>
      <div className="subscribe__footer">
        <Email />
      </div>
    </div>
  );
};

export default Subscribe;
