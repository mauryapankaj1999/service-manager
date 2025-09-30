import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import WellnessServices from "../components/WellnessServices";
import Homebanner from "../components/Homebanner";
import WhyChoosecomponent from "../components/WhyChoosecomponent";
import firstimg from "../assets/images/custom-img-250.jpg";
import secondimg from "../assets/images/custom-img-251.jpg";
import thirdimg from "../assets/images/custom-img-252.jpg";
import Lightboxcomponent from "../components/Lightboxcomponent";

const Home = () => {
  return (
    <div className="home">
      <Homebanner />
      {/* Hero Section */}  =
      {/* Features Section */}
      <WhyChoosecomponent />

      {/* Signature Wellness Services */}
     <WellnessServices />

   

      <Lightboxcomponent />

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

    </div>
  );
};

export default Home;
