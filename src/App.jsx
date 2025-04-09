import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Calendar from './pages/Calendar'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import NavbarComp from './components/Navbar'
import Beaches from './pages/beaches' // Make sure the filename matches case-sensitively!
import './App.css';

export default function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/beaches" element={<Beaches />} /> {/* ✅ Added route */}
      </Routes>
    </Router>
  )
}
