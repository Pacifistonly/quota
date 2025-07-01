import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import firebaseApp from './firebase';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        Welcome! Please Sign In or Sign Up
      </h1>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => navigate('/signin')}>
          Sign In
        </button>
        <button style={styles.button} onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  page: {
    height: '100vh',
    backgroundColor: '#2e2e2e',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  title: {
    fontWeight: '700',
    fontSize: '2.5rem',
    background: 'linear-gradient(90deg, yellow, orange)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: 40,
    textShadow: '0 0 5px rgba(255,165,0,0.7)',
  },
  buttons: {
    display: 'flex',
    gap: 20,
  },
  button: {
    fontWeight: '700',
    fontSize: '1.1rem',
    padding: '12px 30px',
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    color: '#2e2e2e',
    background: 'linear-gradient(90deg, yellow, orange)',
    transition: 'background 0.3s ease',
  },
};
