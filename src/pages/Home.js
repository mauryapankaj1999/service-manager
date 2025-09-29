import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="hero-brand">Service Manager</span>
            </h1>
            <p className="hero-subtitle">
              Your trusted partner for professional services and wellness solutions. 
              We provide high-quality services to help you achieve your goals and improve your well-being.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="hero-icon">🏢</div>
            <p>Professional Services</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Service Manager?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Professional Excellence</h3>
              <p className="feature-description">
                Our team of certified professionals delivers exceptional service quality 
                with attention to detail and customer satisfaction.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Quick & Efficient</h3>
              <p className="feature-description">
                We understand your time is valuable. Our streamlined processes ensure 
                fast and efficient service delivery without compromising quality.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Trusted & Reliable</h3>
              <p className="feature-description">
                With years of experience and a track record of satisfied customers, 
                you can trust us to deliver consistent, reliable results.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">Innovative Solutions</h3>
              <p className="feature-description">
                We stay ahead of industry trends and use the latest techniques 
                to provide innovative solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Discover our range of professional services designed to meet your needs
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-preview">
              <div className="service-preview-icon">💆‍♀️</div>
              <h3 className="service-preview-title">Massage Therapy</h3>
              <p className="service-preview-description">
                Professional massage services to help you relax and rejuvenate
              </p>
            </div>
            
            <div className="service-preview">
              <div className="service-preview-icon">🧴</div>
              <h3 className="service-preview-title">Skin Care</h3>
              <p className="service-preview-description">
                Advanced skincare treatments for healthy, glowing skin
              </p>
            </div>
            
            <div className="service-preview">
              <div className="service-preview-icon">🧘‍♀️</div>
              <h3 className="service-preview-title">Wellness Programs</h3>
              <p className="service-preview-description">
                Comprehensive wellness programs for mind and body balance
              </p>
            </div>
          </div>
          
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest from Our Blog</h2>
            <p className="section-subtitle">
              Stay updated with the latest insights and wellness tips
            </p>
          </div>
          
          <div className="blog-preview-grid">
            <div className="blog-preview-item">
              <div className="blog-preview-image">
                <div className="blog-preview-placeholder">📝</div>
              </div>
              <div className="blog-preview-content">
                <h3 className="blog-preview-title">5 Benefits of Aromatherapy</h3>
                <p className="blog-preview-excerpt">
                  Discover how aromatherapy can reduce stress and improve sleep quality...
                </p>
                <Link to="/blog" className="blog-preview-link">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-preview-item">
              <div className="blog-preview-image">
                <div className="blog-preview-placeholder">🧘‍♂️</div>
              </div>
              <div className="blog-preview-content">
                <h3 className="blog-preview-title">Why Yoga Improves Productivity</h3>
                <p className="blog-preview-excerpt">
                  Yoga is more than exercise – it boosts focus and energy levels...
                </p>
                <Link to="/blog" className="blog-preview-link">Read More →</Link>
              </div>
            </div>
          </div>
          
          <div className="section-cta">
            <Link to="/blog" className="btn btn-outline">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today to discuss your needs and discover how we can help you achieve your goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


