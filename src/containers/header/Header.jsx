import { useEffect, useRef } from "react";
import { Navbar } from "../../components";
import "./header.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const observerOptions = {
      rootMargin: "0px",
      threshold: 1.0, // Intersection ratio of 1.0 means fully visible (sticky)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Header is sticky
          header.classList.add("sticky");
        } else {
          // Header is not sticky
          header.classList.remove("sticky");
        }
      });
    }, observerOptions);

    if (header) {
      observer.observe(header);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <Navbar />
    </div>
  );
};

export default Header;
