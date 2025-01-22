import React from "react";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Surya1 from "../assets/img/suryaStep1.jpeg";
import Surya2 from "../assets/img/SuryaStep2.jpeg";
import Surya3 from "../assets/img/SuryaStep3.jpeg";
import Surya4 from "../assets/img/SuryaStep4.jpeg";
import Bhujangasana1 from "../assets/img/BhujangasanaStep1.jpeg";
import Bhujangasana2 from "../assets/img/BhujangasanaStep2.jpeg";
import Bhujangasana3 from "../assets/img/BhujangasanaStep3.jpeg";
import DownwardDog1 from "../assets/img/AdhoStep1.jpeg";
import DownwardDog2 from "../assets/img/AdhoStep2.jpeg";
import DownwardDog3 from "../assets/img/AdhoStep3.jpeg";
import Surya5 from "../assets/img/SuryaStep5.jpg";
import CobraPose from "../assets/img/cobraPose.jpeg.jpg";

import DownwardDog4 from "../assets/img/DownwardDog.JPG";


export default function Testimonials() {
  return (
    <>
      <section id="programs">
        <div className="container sliders">
          <h2 className="section__title1"><span className="highlights">Full-Length </span>Workout Exercises</h2>
          <br />
          <h2 className="section__title"><span className="highlights">'Surya Namaskar (Sun Salutation)'</span><br />34 Min/Day • 4 Weeks</h2>
          
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
                    src={Surya1}
                    alt="Surya Namaskar"
                  />
                  
                </div>
                <h4></h4>
                <p>
                   Step 1: Start standing tall with feet together and hands in prayer position.
                </p>
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                <img
                    src={Surya2}
                    alt="Surya Namaskar"
                  />
                </div>
                <h4></h4>
                <p>
                Step 2: Inhale and raise both arms upward, palms facing each other.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                <img
                    src={Surya3}
                    alt="Surya Namaskar"
                  />
                </div>
                <h4></h4>
                <p>
                Step 3: 'Exhale and fold forward into a forward bend.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                <img
                    src={Surya4}
                    alt="Surya Namaskar"
                  />
                </div>
                <h4></h4>
                <p>
                Step 4: Step one leg back and lower your hips toward the floor.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                <img
                    src={Surya5}
                    alt="Surya Namaskar"
                  />
                  
                </div>
                <h4> <i class="fa-brands fa-youtube"></i><a href="https://youtu.be/QFhgghL3vGM?feature=shared">Video Tutorial</a></h4>
                <p>
                  Benefits: Improves flexibility, boosts immunity, enhances circulation, strengthens muscles <br />
                   reduces stress, and promotes overall wellness.
                </p>
              </div>
            </SwiperSlide>   
          </Swiper>
           <br />
           <br />
           <h2 className="section__title"><span className="highlights">'Bhujangasana (Cobra Pose)'</span><br />40 Min/Day • 4 Weeks</h2>

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
                    src={Bhujangasana1}
                    alt="Cobra Pose"
                  />
                </div>
                <h4></h4>
                <p>
                Step 1: Lie on your stomach, hands under your shoulders, elbows close to the body.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img
                    src={Bhujangasana2}
                    alt="err"
                  />
                </div>
                <h4></h4>
                <p>
                Step 2: Inhale and lift the chest and head, keeping the elbows slightly bent.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={Bhujangasana3}
                    alt="err"
                  />
                </div>
                <h4></h4>
                <p>
                Step 3: Hold the pose for 10-20 seconds, then exhale and return to the floor.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={CobraPose}
                    alt="err"
                  />
                </div>
                <h4><i class="fa-brands fa-youtube"></i><a href="https://youtu.be/jwoTJNgh8BY?feature=shared">Video Tutorial</a></h4>
                <p>
                 Benefits : Strengthens spine, opens chest, improves posture, relieves stress, <br />
                 boosts flexibility and enhances lung capacity.
                </p>
              </div>
            </SwiperSlide>   
          </Swiper>
          <br />
          <br />
          <h2 className="section__title"><span className="highlights">''Adho Mukha Svanasana (Downward Dog Pose)'</span><br />
          30 Min/Day • 4 Weeks</h2>

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
                    src={DownwardDog1}
                    alt="err"
                  /> 
                </div>
                <h4></h4>
                <p>
                Step 1: Start on your hands and knees, lift your hips up and back.
                </p>
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img
                    src={DownwardDog2}
                    alt="err"
                  />
                </div>
                <h4></h4>
                <p>
                Step 2: Press your heels toward the floor and straighten your arms.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={DownwardDog3}
                    alt="err"
                  />
                </div>
                <h4></h4>
                <p>
                Step 3: Hold the position for a few seconds, then slowly return to the start.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src={DownwardDog4}
                    alt="err"
                  />
                </div>
                <h4><i class="fa-brands fa-youtube"></i><a href="https://youtu.be/-kIOCwVMVGk?feature=shared">Video Tutorial</a></h4>
                <p>
                  Benefits : Stretches hamstrings, strengthens arms, improves posture, boosts circulation <br />
                   relieves stress, and enhances flexibility.
                </p>
              </div>
            </SwiperSlide>   
          </Swiper>

        </div>
      </section>
    </>
  );
}