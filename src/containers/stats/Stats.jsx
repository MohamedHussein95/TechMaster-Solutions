import { useEffect, useRef, useState } from "react";
import "./stats.css";

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const statsRef = useRef();
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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={statsRef}
      className={`stats slide-in-bottom ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="stats__container">
        <h1>50+</h1>
        <p>PROJECTS FINISHED</p>
      </div>
      <div className="stats__container">
        <h1>100+</h1>
        <p>HAPPY CLIENTS</p>
      </div>
      <div className="stats__container">
        <h1>50+</h1>
        <p>RETURNING CLIENTS</p>
      </div>
    </div>
  );
};

export default Stats;
