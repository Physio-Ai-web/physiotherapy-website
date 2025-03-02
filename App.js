import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Conditions from './components/Conditions';
import Exercises from './components/Exercises';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/chatbot" element={<AIChatbot />} />
            </Routes>
            <Footer />
        </Router>
    );
}