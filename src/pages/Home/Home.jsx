import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const headingElement = document.querySelector('.hero-content h1');
    const headingText = "Welcome to Little Break!";
    let i = 0;

    const typingEffect = setInterval(() => {
      if (i < headingText.length) {
        headingElement.textContent += headingText[i]; 
        i++;
      } else {
        clearInterval(typingEffect); 
      }
    }, 100);

    
    return () => clearInterval(typingEffect);
  }, []);
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1></h1> 
          <p>Your perfect spot for coffee, pizza, momos, conversations, and more.</p>
          <a href="\menu" className="cta-button">
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
