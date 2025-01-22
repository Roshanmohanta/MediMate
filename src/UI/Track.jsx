import React from "react";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Doctor1 from "../assets/img/Doctor1.jpg";
import Doctor2 from "../assets/img/Doctor2.jpg";
import Doctor3 from "../assets/img/Doctor3.jpg";
import Doctor4 from "../assets/img/Doctor4.jpg";
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section id="programs">
        <div className="container sliders">
          <h2 className="section__title"><span className="highlights">Doctor  </span>Contacts</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img
                    src={Doctor1}
                    alt="err"
                  />
                </div>
                <h4> Dr. Michael Brown – Pediatrician</h4>
                <p>
                   <li>Experience: 15 years in pediatric care.</li>
                   <li>Skills: Specializes in childhood illnesses, immunizations, and developmental milestones.</li>
                   <li>Achievements: Advocate for children's mental health and conducts parenting and child nutrition workshops.</li>
                   <li><strong>Contact : +91 7697643567</strong></li>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img
                    src={Doctor2}
                    alt="err"
                  />
                </div>
                <h4>. Dr. Ethan Carter – Neurologist</h4>
                <p>
               <li>Experience: 18 years in neurology.</li> 
                <li>Skills: Expert in diagnosing and treating neurological disorders such as migraines, epilepsy, and Parkinson’s disease.</li>
                <li>Achievements: Member of prestigious neurology associations and a guest speaker at international neuroscience forums.
                </li>
                <li><strong> Contact : +91 6758905674</strong></li>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={Doctor3}
                    alt="err"
                  />
                </div>
                <h4> Dr. Sophia Martinez – Cardiologist</h4>
                <p>
                  <li>Experience: 12 years in cardiology.</li>
                  <li>Skills: Advanced diagnostic procedures, non-invasive cardiology, and cardiovascular lifestyle management.</li>
                  <li>Achievements: Published research papers in leading journals and successfully manages complex cardiac cases.</li>
                  <li><strong>Contact : +91 7869876543</strong></li>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={Doctor4}
                    alt="err"
                  />
                </div>
                <h4> Dr. David Lee – Orthopedic Surgeon</h4>
                <p>
                  <li>Experience: Over 20 years in orthopedic surgery.</li>
                  <li>Skills: Specializes in joint replacements, sports injuries, and spinal surgeries.</li>
                  <li>Achievements: Trained under world-renowned orthopedic surgeons and participates in international workshops.</li>
                  <li><strong>Contact : +91 7654983564</strong></li>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
