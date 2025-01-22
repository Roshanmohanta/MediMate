import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import nurseImage from '../assets/img/nurse1_sign.png'; // Nurse image
import '../styles/SignupPage.css'; // The CSS file for animations and styling

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage('Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    // Perform signup (for now, assume successful signup)
    setMessage('');
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <div className="signup-page">
      <div className="nurse-container">
        <img src={nurseImage} alt="Nurse" className="nurse-image" />
      </div>
      <Container id="signup-container" maxWidth="xs" className="signup-container">
        {/* Red Cross Sign */}
        <div className="red-cross">+</div>

        {/* Siren Light */}
        <div className="siren-light"></div>

        <Typography variant="h4" gutterBottom align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {message && <Typography color="error">{message}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Grid container justifyContent="center" style={{ marginTop: 16 }}>
          <Grid item>
            <Typography variant="body2">
              Already have an account? <a href="/login">Login</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SignupPage;
