import React from 'react'
import { Link } from 'react-router-dom'

const WellnessServices = () => {
  return (
    <>
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
    </>
  )
}

export default WellnessServices