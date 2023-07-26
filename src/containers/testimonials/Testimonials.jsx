import { useEffect, useRef, useState } from "react";
import Card from "../../components/card/Card";
import "./testimonials.css";

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const testiRef = useRef();
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

    if (testiRef.current) {
      observer.observe(testiRef.current);
    }

    return () => {
      if (testiRef.current) {
        observer.unobserve(testiRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={testiRef}
      className={`testimonials ${visible ? "animate" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="testimonials__header-container">
        <p>Testimonials</p>
        <h1>What Clients Say</h1>
        <p>
          We place huge value on strong relationships and have seen the benefit
          they <br />
          bring to our business.Customer feedback is vital in helping us to get
          it right
        </p>
      </div>
      <div className="testimonials__card-container">
        <Card
          image={
            "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
          }
          body={
            "TechMaster Solutions surpassed all expectations! Their team crafted a brilliant website that boosted our online presence instantly. Highly recommended!"
          }
          fullName={"John Smith"}
          occupation={"Chief Accountant"}
          i={1}
        />
        <Card
          image={
            "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"
          }
          body={
            "Wow! The mobile app they developed for us is simply outstanding. User-friendly and visually appealing. Great job, TechMaster!"
          }
          fullName={"Sarah Williams"}
          occupation={"Marketing Manager"}
          i={2}
        />
        <Card
          image={
            "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
          }
          body={
            "With TechMaster's digital marketing expertise, our business witnessed a significant rise in leads and conversions. Impressive work!"
          }
          fullName={"David Adams"}
          occupation={"CEO of QuickFixx"}
          i={3}
        />
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5U5D_cU8TJB0oo7nlRXVRBywE8CU1OexlK3f0AivE6OsoD1OCu9zPHHxczNwNI8FHzw&usqp=CAU"
          }
          body={
            "TechMaster Solutions is a game-changer! They provided us with innovative solutions that aligned perfectly with our goals. Thrilled with the results!"
          }
          fullName={"Michael Johnson"}
          occupation={"Director of Operations at MTS Enterprises"}
          i={4}
        />
      </div>
    </div>
  );
};

export default Testimonials;
