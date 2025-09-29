import React, { useState } from 'react';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save enquiry data to localStorage
      const enquiries = JSON.parse(localStorage.getItem('serviceEnquiries') || '[]');
      const enquiryData = {
        id: Date.now(),
        serviceId: service.id,
        serviceTitle: service.title,
        servicePrice: service.price,
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      enquiries.push(enquiryData);
      localStorage.setItem('serviceEnquiries', JSON.stringify(enquiries));
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', query: '' });
        setSubmitStatus(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: '', email: '', phone: '', query: '' });
      setSubmitStatus(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Service Enquiry</h2>
          <button 
            className="modal-close" 
            onClick={handleClose}
            disabled={isSubmitting}
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="service-info">
            <h3>{service.title}</h3>
            <p className="service-price">{service.price}</p>
            <p className="service-description">{service.description}</p>
          </div>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Enquiry Submitted Successfully!</h3>
              <p>Thank you for your interest. We'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              <div className="error-icon">✗</div>
              <h3>Submission Failed</h3>
              <p>Please try again or contact us directly.</p>
            </div>
          )}
          
          {!submitStatus && (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="query" className="form-label">
                  Your Query *
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  placeholder="Tell us about your requirements or any questions you have"
                  rows="4"
                />
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;



