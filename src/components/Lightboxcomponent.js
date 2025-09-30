import React from 'react'
import firstimg from "../assets/images/custom-img-250.jpg";
import secondimg from "../assets/images/custom-img-251.jpg";
import thirdimg from "../assets/images/custom-img-252.jpg";

const Lightboxcomponent = () => {
  return (
    <>
    <div className="contaiener">
          <div className="midbannertrhee">
            <div className="firstimg">
              <div className="image-container">
                <img src={firstimg} alt="firstimg" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Wellness Experience</h3>
                    <p>Discover our premium wellness services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="firstimg">
              <div className="image-container">
                <img src={secondimg} alt="secondimg" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Relaxation Therapy</h3>
                    <p>Unwind with our therapeutic treatments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="firstimg">
              <div className="image-container">
                <img src={thirdimg} alt="thirdimg" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Premium Care</h3>
                    <p>Experience luxury wellness at its finest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
  )
}

export default Lightboxcomponent