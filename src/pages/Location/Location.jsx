import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location">
      <div className="location-content">
        <h1>Our Location</h1>
        <p>
        New Bus Stand Palampur, HRTC Complex, Shop No 12,13, Palampur, Himachal Pradesh 176061
        </p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.792130090297!2d76.53375917411151!3d32.1108927177324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b3914b46448f%3A0xe690c5961244adbf!2sSassy%20Little%20Break%20Cafe!5e1!3m2!1sen!2sin!4v1735642782251!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;


<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>