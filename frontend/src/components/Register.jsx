import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Link as MuiLink } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Register
          </Button>
          <MuiLink 
            href="/log" 
            sx={{ textDecoration: 'none', color: '#1976d2', display: 'block', marginTop: 2, textAlign: 'center' }}
          >
            <Typography variant="body2">
              Already have an account? Login here
            </Typography>
          </MuiLink>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
