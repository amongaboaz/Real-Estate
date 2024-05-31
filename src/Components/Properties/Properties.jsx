import React from 'react';
import './Properties.css';

// Importing images
import property1 from '../Assets/p1.jpg';
import property2 from '../Assets/p2.jpg';
import property3 from '../Assets/p3.jpg';
import property4 from '../Assets/p1.jpg';
import property5 from '../Assets/p2.jpg';
import property6 from '../Assets/p3.jpg';

const propertiesData = [
  {
    id: 1,
    image: property1,
    title: 'Luxury Villa in Beverly Hills',
    description: 'Beautiful villa with stunning views and luxurious amenities.',
    price: '$4,500,000',
  },
  {
    id: 2,
    image: property2,
    title: 'Modern Apartment in New York',
    description: 'Stylish apartment located in the heart of the city.',
    price: '$2,300,000',
  },
  {
    id: 3,
    image: property3,
    title: 'Cozy Cottage in the Countryside',
    description: 'Charming cottage with a large garden and scenic surroundings.',
    price: '$850,000',
  },
  {
    id: 1,
    image: property4,
    title: 'Luxury Villa in Beverly Hills',
    description: 'Beautiful villa with stunning views and luxurious amenities.',
    price: '$4,500,000',
  },
  {
    id: 2,
    image: property5,
    title: 'Modern Apartment in New York',
    description: 'Stylish apartment located in the heart of the city.',
    price: '$2,300,000',
  },
  {
    id: 3,
    image: property6,
    title: 'Cozy Cottage in the Countryside',
    description: 'Charming cottage with a large garden and scenic surroundings.',
    price: '$850,000',
  },
  // Add more properties as needed
];

const Properties = () => {
  return (
    <div className="properties">
      <h1>Properties for Sale</h1>
      <div className="properties-container">
        {propertiesData.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <p className="property-price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
