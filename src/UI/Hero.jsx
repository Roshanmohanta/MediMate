import React from 'react'
import heroImg from "../assets/img/login-doc.png"
import "../styles/hero.css";

const Hero = () => {
  return <section id='#'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <h2 className='section__title' data-aos-duration="1000" data-aos="fade-up">Exercise is the key to a <span className="highlights"></span> Healthy Lifestyle</h2>
                <p data-aos-duration="1100" data-aos="fade-up" data-aos-delay="120">Regular exercise is a crucial component of a healthy lifestyle.<br/>It has numerous benefits for physical and mental health, including reducing the risk of chronic diseases,improving cardiovascular function,<br/>  enhancing mood, reducing stress, and promoting better sleep.</p>,<br/>
                <p data-aos-duration="1100" data-aos="fade-up" data-aos-delay="120"></p>
            </div>

            <div className='hero__img'>
                <div className="hero__img-wrapper">
                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box__img" data-aos-duration="1100" data-aos="fade-left">
                                    <img src={heroImg} alt="err" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heart__rate" data-aos-duration="1100" data-aos="fade-right">
                        <h5>Heart Rate</h5>
                        <span><i className="ri-heart-pulse-fill"></i></span>
                        <h6>72 BPM</h6>
                    </div>

                    <div className="gym__location" data-aos-duration="1100" data-aos="fade-up">
                        <span><i className="ri-map-pin-2-fill"></i></span>
                        <h5>Find our gym centers near you</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  
}


export default Hero
