import React, { useState, useEffect } from 'react';
import './EnquiryViewer.css';

const EnquiryViewer = ({ isOpen, onClose }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEnquiries();
  }, [isOpen]);

  const loadEnquiries = () => {
    try {
      const storedEnquiries = JSON.parse(localStorage.getItem('serviceEnquiries') || '[]');
      setEnquiries(storedEnquiries.reverse()); // Show newest first
      setLoading(false);
    } catch (error) {
      console.error('Error loading enquiries:', error);
      setLoading(false);
    }
  };

  const clearAllEnquiries = () => {
    if (window.confirm('Are you sure you want to clear all enquiries? This action cannot be undone.')) {
      localStorage.removeItem('serviceEnquiries');
      setEnquiries([]);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-viewer-overlay" onClick={onClose}>
      <div className="enquiry-viewer-content" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-viewer-header">
          <h2>Service Enquiries ({enquiries.length})</h2>
          <div className="enquiry-viewer-actions">
            <button onClick={loadEnquiries} className="btn btn-outline">
              Refresh
            </button>
            <button onClick={clearAllEnquiries} className="btn btn-danger">
              Clear All
            </button>
            <button onClick={onClose} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
        
        <div className="enquiry-viewer-body">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading enquiries...</p>
            </div>
          ) : enquiries.length === 0 ? (
            <div className="no-enquiries">
              <div className="no-enquiries-icon">📝</div>
              <h3>No enquiries yet</h3>
              <p>Service enquiries will appear here when customers submit them.</p>
            </div>
          ) : (
            <div className="enquiries-list">
              {enquiries.map((enquiry) => (
                <div key={enquiry.id} className="enquiry-item">
                  <div className="enquiry-header">
                    <h4 className="enquiry-service">{enquiry.serviceTitle}</h4>
                    <span className="enquiry-price">{enquiry.servicePrice}</span>
                    <span className="enquiry-date">{formatDate(enquiry.timestamp)}</span>
                  </div>
                  
                  <div className="enquiry-details">
                    <div className="enquiry-field">
                      <strong>Name:</strong> {enquiry.name}
                    </div>
                    <div className="enquiry-field">
                      <strong>Email:</strong> {enquiry.email}
                    </div>
                    <div className="enquiry-field">
                      <strong>Phone:</strong> {enquiry.phone}
                    </div>
                    <div className="enquiry-field">
                      <strong>Query:</strong> {enquiry.query}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryViewer;



