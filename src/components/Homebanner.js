import React from 'react'
import { Link } from 'react-router-dom'

const Homebanner = () => {
  return (
    <>
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
              <Link  to="/services" className="btn btn-primary">
                Book Treatment
              </Link>
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Homebanner