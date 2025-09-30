import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-brand">SPA SALON </span>    
              &
              <br />MASSAGE
            </h1>
            <p className="hero-subtitle">
              Experience the ultimate relaxation and rejuvenation at our premium spa. 
              <br />
              Professional massage therapy, skincare treatments, and wellness programs 
              designed to restore your mind, body, and spirit.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Book Treatment
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="hero-image">
          <div className="hero-placeholder">
            <div className="hero-icon">🧘‍♀️</div>
            <p>Wellness & Relaxation</p>
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Wellness Joy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💆‍♀️</div>
              <h3 className="feature-title">Certified Therapists</h3>
              <p className="feature-description">
                Our licensed massage therapists and estheticians are trained in 
                the latest techniques to provide you with the most effective treatments.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🕯️</div>
              <h3 className="feature-title">Serene Environment</h3>
              <p className="feature-description">
                Relax in our tranquil spa setting with calming aromatherapy, 
                soft lighting, and peaceful ambiance designed for complete relaxation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3 className="feature-title">Natural Products</h3>
              <p className="feature-description">
                We use only premium, natural and organic products to ensure 
                the best care for your skin and overall well-being.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Personalized Care</h3>
              <p className="feature-description">
                Each treatment is customized to your specific needs and preferences, 
                ensuring a truly personalized wellness experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Wellness Services */}
      <section className="signature-services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Signature Wellness Services</p>
            <h2 className="section-title">Healing Your Mind, Body, Spirit</h2>
          </div>
          
          <div className="signature-services-grid">
            <div className="signature-service-card">
              <div className="signature-service-title">Massage Therapy
</div>
              <p className="signature-service-description">
                We help you feel renewed and balanced through comprehensive wellness approaches
              </p>
              <div className="signature-service-image">💆‍♀️</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>

            <div className="signature-service-card">
              <div className="signature-service-title">Skin Care
</div>
              <p className="signature-service-description">
                We offer relaxing spa and massage care tailored to your individual needs
              </p>
              <div className="signature-service-image">🧴</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>

            <div className="signature-service-card">
              <div className="signature-service-title">Wellness Programs
</div>
              <p className="signature-service-description">
                Discover our custom wellness packages designed for complete rejuvenation
              </p>
              <div className="signature-service-image">🧘‍♀️</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>

            <div className="signature-service-card">
              <div className="signature-service-title">Therapeutic Massage</div>
              <p className="signature-service-description">
                Professional massage therapy to relieve stress and restore your body's natural balance
              </p>
              <div className="signature-service-image">🤲</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>

            <div className="signature-service-card">
              <div className="signature-service-title">Advanced Skin Care</div>
              <p className="signature-service-description">
                Luxurious facial treatments and skincare solutions for radiant, healthy skin
              </p>
              <div className="signature-service-image">✨</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>

            <div className="signature-service-card">
              <div className="signature-service-title">Aromatherapy & Spa</div>
              <p className="signature-service-description">
                Immerse yourself in our aromatic spa treatments using premium essential oils
              </p>
              <div className="signature-service-image">🕯️</div>
              <Link to="/services" className="signature-service-btn">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
    

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
                <h3 className="blog-preview-title">
                  5 Benefits of Aromatherapy
                </h3>
                <p className="blog-preview-excerpt">
                  Discover how aromatherapy can reduce stress and improve sleep
                  quality...
                </p>
                <Link to="/blog" className="blog-preview-link">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="blog-preview-item">
              <div className="blog-preview-image">
                <div className="blog-preview-placeholder">🧘‍♂️</div>
              </div>
              <div className="blog-preview-content">
                <h3 className="blog-preview-title">
                  Why Yoga Improves Productivity
                </h3>
                <p className="blog-preview-excerpt">
                  Yoga is more than exercise – it boosts focus and energy
                  levels...
                </p>
                <Link to="/blog" className="blog-preview-link">
                  Read More →
                </Link>
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
              Contact us today to discuss your needs and discover how we can
              help you achieve your goals.
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
