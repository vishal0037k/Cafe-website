import React from 'react';
import './About.css';
import chef from '../../assets/chef.png';
const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Little Break</h1>
        <p>
          Welcome to <strong>Little Break</strong>, your go-to café and restaurant since 2022! Located in the heart of the city, we’re dedicated to serving you the most delicious and memorable food experiences. Whether you’re in the mood for our famous momos, crispy french fries, cheesy pizza, flavorful chow mein, or comforting maggie, we have something for everyone.
        </p>
        <p>
          Our cozy atmosphere and friendly service make Little Break the perfect spot for hangouts, casual meetings, or just a break from your busy day.
        </p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={chef} alt="Chef 1" />
            <h3>Name 1</h3>
            <p>Chef</p>
          </div>
          <div className="team-member">
            <img src={chef} alt="Chef 2" />
            <h3>Name 2</h3>
            <p>Water</p>
          </div>
          <div className="team-member">
            <img src={chef} alt="Chef 3" />
            <h3>Name 3</h3>
            <p>Casher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;