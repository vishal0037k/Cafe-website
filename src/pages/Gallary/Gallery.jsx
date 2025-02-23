import React from 'react';
import './Gallery.css';
import pizza from '../../assets/pizza.avif';
import momos from '../../assets/momos.jpg';
import french from '../../assets/french.webp';
import chomin from '../../assets/chomin.jpg';
import maggie from '../../assets/maggie.jpg';

const Gallery = () => {
  const photos = [
    {
      src: `${pizza}`,
      alt: 'Delicious Pizza',
    },
    {
      src: `${momos}`,
      alt: 'Hot Momos',
    },
    {
      src: `${french}`,
      alt: 'Crispy French Fries',
    },
    {
      src: `${chomin}`,
      alt: 'Flavorful Chow Mein',
    },
    {
      src: `${maggie}`,
      alt: 'Comforting Maggie',
    },
  ];

  return (
    <div className="gallery">
      <h1>Our Photo Gallery</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;