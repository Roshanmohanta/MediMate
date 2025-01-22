import React from 'react';
import { useLocation } from 'react-router-dom';
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
import Pranayama1 from "../assets/img/PranayamaStep1.jpeg";
import Pranayama2 from "../assets/img/PranayamaStep2.jpeg";
import Pranayama3 from "../assets/img/PranayamaStep3.jpeg";
import Plank1 from "../assets/img/plankStep1.jpeg";
import Plank2 from "../assets/img/plankStep2.jpeg";
import ChildPose1 from "../assets/img/childStep1.jpeg";
import ChildPose2 from "../assets/img/childStep2.jpeg";
import ChairPose1 from "../assets/img/chairStep1.jpeg";
import ChairPose2 from "../assets/img/chairStep2.jpeg";
import '../styles/ExerciseInside.css';

function Exercise() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const exerciseName = params.get('name'); // Get the exercise name from the query string

  const exercises = [
    {
      name: 'Surya Namaskar (Sun Salutation)',
      description: 'A series of poses performed in a flow to warm up your body.',
      steps: [
        { step: 'Start standing tall with feet together and hands in prayer position.', image: Surya1 },
        { step: 'Inhale and raise both arms upward, palms facing each other.', image: Surya2 },
        { step: 'Exhale and fold forward into a forward bend.', image: Surya3 },
        { step: 'Step one leg back and lower your hips toward the floor.', image: Surya4 },
      ],
    },
    {
      name: 'Bhujangasana (Cobra Pose)',
      description: 'This pose helps strengthen the back and open the chest.',
      steps: [
        { step: 'Lie on your stomach, hands under your shoulders, elbows close to the body.', image: Bhujangasana1 },
        { step: 'Inhale and lift the chest and head, keeping the elbows slightly bent.', image: Bhujangasana2 },
        { step: 'Hold the pose for 10-20 seconds, then exhale and return to the floor.', image: Bhujangasana3 },
      ],
    },
    {
      name: 'Adho Mukha Svanasana (Downward Dog Pose)',
      description: 'This pose helps stretch the back, hamstrings, and calves.',
      steps: [
        { step: 'Start on your hands and knees, lift your hips up and back.', image: DownwardDog1 },
        { step: 'Press your heels toward the floor and straighten your arms.', image: DownwardDog2 },
        { step: 'Hold the position for a few seconds, then slowly return to the start.', image: DownwardDog3 },
      ],
    },
    {
      name: 'Pranayama (Breathing Exercise)',
      description: 'This exercise helps calm the mind and increase lung capacity.',
      steps: [
        { step: 'Sit comfortably with your spine straight and shoulders relaxed.', image: Pranayama1 },
        { step: 'Close your eyes and inhale deeply through your nose, hold the breath.', image: Pranayama2 },
        { step: 'Exhale slowly and repeat for several rounds.', image: Pranayama3 },
      ],
    },
    {
      name: 'Plank Pose',
      description: 'A strength-building pose that targets the core, arms, and shoulders.',
      steps: [
        { step: 'Start in a push-up position with your arms straight and body in a straight line.', image: Plank1 },
        { step: 'Engage your core and hold for 20-30 seconds.', image: Plank2 },
      ],
    },
    {
      name: 'Child\'s Pose',
      description: 'A gentle stretch for the back, hips, and legs.',
      steps: [
        { step: 'Kneel on the floor, sit back on your heels, and stretch your arms forward.', image: ChildPose1 },
        { step: 'Lower your chest to the floor and rest your forehead on the ground.', image: ChildPose2 },
      ],
    },
    {
      name: 'Chair Pose',
      description: 'A strength-building pose for the legs and core.',
      steps: [
        { step: 'Stand with your feet together, bend your knees, and sit back as if sitting in a chair.', image: ChairPose1 },
        { step: 'Keep your arms raised and hold the position for 20-30 seconds.', image: ChairPose2 },
      ],
    },
  ];

  const selectedExercise = exercises.find((exercise) => exercise.name.toLowerCase() === exerciseName?.toLowerCase());

  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h2>Exercise for Staying Healthy</h2>
        {selectedExercise ? (
          <p>{selectedExercise.description}</p>
        ) : (
          <p>Follow these step-by-step exercises for a well-rounded fitness routine.</p>
        )}
      </div>

      <div className="exercise-list">
        {selectedExercise ? (
          <div className="exercise-item">
            <h3>{selectedExercise.name}</h3>
            <div className="steps">
              {selectedExercise.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="step">
                  <p>{step.step}</p>
                  <img src={step.image} alt={step.step} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          exercises.map((exercise, index) => (
            <div key={index} className="exercise-item">
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
              <div className="steps">
                {exercise.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="step">
                    <p>{step.step}</p>
                    <img src={step.image} alt={step.step} />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Exercise;
