import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { name: 'Momos', price: '₹80', description: 'Steamed or fried dumplings filled with veggies or meat.' },
    { name: 'Pizza', price: '₹250', description: 'Cheesy and loaded with fresh toppings.' },
    { name: 'French Fries', price: '₹60', description: 'Crispy and golden potato fries.' },
    { name: 'Chow Mein', price: '₹120', description: 'Stir-fried noodles with vegetables and sauces.' },
    { name: 'Maggie', price: '₹50', description: 'Quick and delicious instant noodles.' },
  ];

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h2>{item.name} - <span>{item.price}</span></h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;