import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h5" align="center">
          Login
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
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2', marginTop: 16 }}>
            <Typography variant="body2" align="center">
              Don't have an account? Register here
            </Typography>
          </Link>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
