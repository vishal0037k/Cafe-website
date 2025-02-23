// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   const handleForm = () =>{
//       alert("Your mail is sent successfully.")
//   }
//   return (
//     <div className="contact">
//       <h1>Contact Us</h1>
//       <p>If you have any questions or want to get in touch, feel free to contact us!</p>
//       <div className="contact-info">
//         <div className="info-item">
//           <h2>Address:</h2>
//           <p>  New Bus Stand Palampur, HRTC Complex, Shop No 12,13, Palampur, Himachal Pradesh 176061</p>
//         </div>
//         <div className="info-item">
//           <h2>Phone:</h2>
//           <p>+91 9876543210</p>
//         </div>
//         <div className="info-item">
//           <h2>Email:</h2>
//           <p>littlebreak@example.com</p>
//         </div>
//       </div>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Your Message" required></textarea>
//         <button onClick={handleForm} type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dqftf7j", 
        "template_3f2ux6f",
        formData,
        "wrrvCVeoXZr1exhDW" 
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or want to get in touch, feel free to contact us!</p>
      <div className="contact-info">
        <div className="info-item">
          <h2>Address:</h2>
          <p>New Bus Stand Palampur, HRTC Complex, Shop No 12,13, Palampur, Himachal Pradesh 176061</p>
        </div>
        <div className="info-item">
          <h2>Phone:</h2>
          <p>+91 9876543210</p>
        </div>
        <div className="info-item">
          <h2>Email:</h2>
          <p>littlebreak@example.com</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
