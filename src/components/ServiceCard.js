import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { title, description, price, image, category } = service;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="service-card">
        <div className="service-image-container">
          <img 
            src={image} 
            alt={title}
            className="service-image"
            loading="lazy"
          />
          <div className="service-category">
            {category}
          </div>
        </div>
        
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
          <div className="service-price">{price}</div>
          <button 
            className="service-btn"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
      
      <EnquiryModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={service}
      />
    </>
  );
};

export default ServiceCard;
