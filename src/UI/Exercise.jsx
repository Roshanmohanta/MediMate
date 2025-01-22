import React from 'react'
import "../styles/exercise.css";
import lunges from "../assets/img/lunges.png"
import yoga from "../assets/img/yoga-pose.png"
import ex from "../assets/img/extended.png"

const Exercise = () => {
  return <section>
    <div className="container exercise__top">
        <div className="exercise__top">
            <h2 className="section__title">Health <span className="highlights">Information</span></h2>
            <p>Exercise is essential for maintaining a healthy body and mind,<br/> and can improve quality of life in numerous ways.</p>
        </div>
        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={lunges} alt="err" /></span>

                <div className="exercise__content">
                    <h4>General Health Tips:</h4>
                    <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.</li>
                  <li>Exercise regularly, aiming for at least 30 minutes of moderate physical activity most days of the week.</li>
                  <li>Stay hydrated by drinking at least 8 glasses of water a day.</li>
                  <li>Get 7-9 hours of quality sleep every night to promote physical and mental health.</li>
                </div>
            </div>

            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={ex} alt="err" /></span>

                <div className="exercise__content">
                    <h4>Exercise and Fitness:</h4>
                    <li>Incorporate aerobic exercises like walking, cycling, or swimming to improve cardiovascular health.</li>
                  <li>Strength training exercises, like weight lifting or resistance bands, help build muscle mass and improve bone health.</li>
                  <li>Stretching exercises are essential for maintaining flexibility and preventing injuries.</li>
                 
                </div>
            </div>


            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={yoga}alt="err" /></span>

                <div className="exercise__content">
                    <h4>Stress Management Techniques:</h4>
    
                    <li>Deep breathing exercises can help reduce anxiety and lower stress levels.</li>
    <li>Engage in hobbies and recreational activities to relax your mind.</li>
    <li>Maintain a positive mindset by practicing gratitude and positive self-talk.</li>
    
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Exercise
