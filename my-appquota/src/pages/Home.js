// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1 style={{ 
        fontWeight: 'bold', 
        background: 'linear-gradient(to right, yellow, orange)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent' 
      }}>
        Welcome! Please Sign In or Sign Up
      </h1>
      <div style={{ marginTop: 20 }}>
        <Link to="/signin" style={{ marginRight: 20, fontWeight: 'bold', color: 'orange' }}>Sign In</Link>
        <Link to="/signup" style={{ fontWeight: 'bold', color: 'orange' }}>Sign Up</Link>
      </div>
    </div>
  );
}