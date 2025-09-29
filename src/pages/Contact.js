import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in real app, this would send to backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store form data in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        recaptchaToken
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock reCAPTCHA for demo purposes
  const handleMockRecaptcha = () => {
    if (!recaptchaToken) {
      setRecaptchaToken('mock-token-' + Date.now());
    } else {
      setRecaptchaToken(null);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us. We'd love to hear from you and answer any questions you may have.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contact-info-title">Get in Touch</h2>
            <p className="contact-info-description">
              We're here to help and answer any question you might have. 
              We look forward to hearing from you.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">📧</div>
                <div className="contact-detail-content">
                  <h3>Email</h3>
                  <p>info@servicemanager.com</p>
                  <p>support@servicemanager.com</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">📞</div>
                <div className="contact-detail-content">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">📍</div>
                <div className="contact-detail-content">
                  <h3>Address</h3>
                  <p>123 Wellness Street</p>
                  <p>Health City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="success">
                <h3>Thank you for your message!</h3>
                <p>We've received your message and will get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error">
                <h3>Sorry, there was an error</h3>
                <p>Please try again or contact us directly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
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
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  placeholder="Tell us how we can help you"
                  rows="5"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Security Verification *
                </label>
                <div className="mock-recaptcha">
                  <button
                    type="button"
                    className={`mock-recaptcha-btn ${recaptchaToken ? 'verified' : ''}`}
                    onClick={handleMockRecaptcha}
                  >
                    {recaptchaToken ? '✓ Verified' : 'Click to Verify'}
                  </button>
                </div>
                <p className="recaptcha-note">
                  Please complete the verification to submit the form.
                </p>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting || !recaptchaToken}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How quickly do you respond to inquiries?</h3>
              <p className="faq-answer">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What services do you offer?</h3>
              <p className="faq-answer">
                We offer a wide range of professional services including massage therapy, 
                skincare treatments, wellness programs, and yoga sessions.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you offer custom packages?</h3>
              <p className="faq-answer">
                Yes! We're happy to create custom service packages tailored to your specific 
                needs and preferences. Contact us to discuss your requirements.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What are your business hours?</h3>
              <p className="faq-answer">
                We're open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday 
                from 10:00 AM to 4:00 PM. We're closed on Sundays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
