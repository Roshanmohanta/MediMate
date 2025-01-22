import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Modal,
} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import { useNavigate } from 'react-router-dom';
import MedicineImage from '../assets/img/Symptom_medicine.jpg';
import DoctorCheckingImage from '../assets/img/doctor.jpeg';
import Paracetamol from '../assets/img/Paracetamol.png';
import Iburo from '../assets/img/ibuprofen.webp';
import Cough from '../assets/img/dextromethorphan.webp';
import Cold from '../assets/img/cetirizine.webp';
import '../styles/SymptomsAndMedicine.css';

const symptomData = {
  fever: {
    medicine: 'Paracetamol',
    suggestion: 'Take one tablet after meals, twice a day.',
    exercise: 'Light Yoga for Relaxation',
    image: Paracetamol,
    storeLink: 'https://www.google.com/maps/search/pharmacy+near+me',
  },
  headache: {
    medicine: 'Ibuprofen',
    suggestion: 'Take one tablet with water after food.',
    exercise: 'Meditation and Breathing Exercises',
    image: Iburo,
    storeLink: 'https://www.google.com/maps/search/pharmacy+near+me',
  },
  cough: {
    medicine: 'Cough Syrup (Dextromethorphan)',
    suggestion: 'Take 2 teaspoons every 6 hours.',
    exercise: 'Steam Inhalation Exercise',
    image: Cough,
    storeLink: 'https://www.google.com/maps/search/pharmacy+near+me',
  },
  cold: {
    medicine: 'Antihistamines (Cetirizine)',
    suggestion: 'Take one tablet at night before sleeping.',
    exercise: 'Breathing Exercises',
    image: Cold,
    storeLink: 'https://www.google.com/maps/search/pharmacy+near+me',
  },
  fatigue: {
    medicine: 'Vitamin B Complex',
    suggestion: 'Take one capsule after breakfast.',
    exercise: 'Gentle Stretching',
    image: null,
    storeLink: 'https://www.google.com/maps/search/pharmacy+near+me',
  },
};

const SymptomsAndMedicine = () => {
  const [symptom, setSymptom] = useState('');
  const [result, setResult] = useState('');
  const [medicine, setMedicine] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [exercise, setExercise] = useState('');
  const [loading, setLoading] = useState(false);
  const [alarmTime, setAlarmTime] = useState('');
  const [openAlarmModal, setOpenAlarmModal] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false); // State to handle image enlargement
  const [currentImage, setCurrentImage] = useState(null); // State to track the current medicine image
  const [storeLink, setMedicineStore] = useState('');
  const navigate = useNavigate();

  const handleCheck = () => {
    setLoading(true);
    setResult('');
    setMedicine('');
    setSuggestion('');
    setExercise('');
    setMedicineStore('');

    setTimeout(() => {
      setLoading(false);
      const data = symptomData[symptom.toLowerCase()];
      if (data) {
        setResult(`For your symptom "${symptom}", we recommend the following:`);
        setMedicine(data.medicine);
        setSuggestion(data.suggestion);
        setExercise(data.exercise);
        setCurrentImage(data.image); // Set the image of the medicine
        setMedicineStore(data.storeLink);
      } else {
        setResult('Symptom not found. Please consult a doctor.');
      }
    }, 1000); // Simulate API response delay
  };

  const handleSetAlarm = () => {
    if (!alarmTime) {
      alert('Please select a time for the alarm!');
      return;
    }

    const alarmDate = new Date(alarmTime);
    const now = new Date();

    if (alarmDate > now) {
      const delay = alarmDate - now;
      setTimeout(() => {
        alert(`Reminder: It's time to take your medicine - ${medicine}.`);
      }, delay);
      alert(`Alarm set successfully for ${alarmDate.toLocaleTimeString()}.`);
    } else {
      alert('Please select a future time for the alarm!');
    }

    setOpenAlarmModal(false);
  };

  const handleImageClick = () => {
    setIsImageEnlarged(!isImageEnlarged); // Toggle the enlargement of the image
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <Box
            component="img"
            src={DoctorCheckingImage}
            alt="Doctor Checking Patient"
            className="doctor-animation"
            sx={{ width: '23%', height: 'auto' }}
          />
          <Typography variant="h6" sx={{ marginTop: 2, color: '#fff' }}>
            Processing your symptom...
          </Typography>
        </div>
      )}

      <Container sx={{ marginTop: 4, minHeight: '80vh' }} className={loading ? 'blurred' : ''}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Symptom & Medicine Finder
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 3 }}>
              <Box
                component="img"
                src={MedicineImage}
                alt="Medicine"
                sx={{ width: '100%', height: 350, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enter your symptom to find a possible medicine:
                </Typography>
                <TextField
                  label="Enter Symptom"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AlarmIcon />}
                  fullWidth
                  sx={{ marginTop: 2 }}
                  onClick={handleCheck}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Check Symptom'}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {!loading && result && (
            <>
              <Grid item xs={12} md={8} sx={{ marginTop: 4 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {result}
                </Typography>
              </Grid>
              {medicine && (
                <Grid item xs={12} md={8} sx={{ marginTop: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Medicine:</Typography>
                  {currentImage && (
                    <Box
                      component="img"
                      src={currentImage}
                      alt={medicine}
                      sx={{
                        width: isImageEnlarged ? 250 : 100, // Adjusted size
                        height: isImageEnlarged ? 'auto' : 100,
                        objectFit: 'contain',
                        marginBottom: 2,
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: isImageEnlarged ? 'scale(1.5)' : 'scale(1)',
                      }}
                      onClick={handleImageClick} // Toggle image enlargement on click
                    />
                  )}
                  <Typography>{medicine}</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {suggestion}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ backgroundColor: 'rgba(14, 14, 118, 0.831)', marginTop: 2 }}
                    onClick={() => setOpenAlarmModal(true)}
                  >
                    Set Alarm for Medicine
                  </Button>
                </Grid>
              )}
              {exercise && (
                <Grid item xs={12} md={8} sx={{ marginTop: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Exercise:</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ backgroundColor: '#3f51b5', marginTop: 2 }}
                    /*onClick={() => navigate(`/exercise?name=${exercise}`)}*/
                  >
                    {exercise}
                  </Button>
                </Grid>
              )}
             {storeLink && (
                <Grid item xs={12} md={8} sx={{ marginTop: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Medicine Store:</Typography>
                  <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ backgroundColor: '#28a745', marginTop: 2 }}
      href={symptomData[symptom.toLowerCase()]?.storeLink}
      target="_blank"
    >
      Find Store Near You
    </Button>
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Container>

      {/* Alarm Modal */}
      <Modal open={openAlarmModal} onClose={() => setOpenAlarmModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Set Alarm for {medicine}
          </Typography>
          <TextField
            type="datetime-local"
            fullWidth
            value={alarmTime}
            onChange={(e) => setAlarmTime(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSetAlarm}
            fullWidth
          >
            Set Alarm
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SymptomsAndMedicine;