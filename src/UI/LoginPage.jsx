import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import login_doc from "../assets/img/login-doc.png";
import '../styles/LoginPage.css'; // New CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    // Perform authentication (for now, assume successful login)
    setMessage('');
    navigate('/health-info'); // Redirect to the Health Info page after login
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
          {message && <Typography color="error">{message}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Grid container justifyContent="center" style={{ marginTop: 16 }}>
          <Grid item>
            <Typography variant="body2">
              Don't have an account? <a href="/signup">Sign Up</a>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="login-doc">
      <img src={login_doc} alt='Login-Doc'></img>
      </div>
    </div>
  );
}

export default LoginPage;
