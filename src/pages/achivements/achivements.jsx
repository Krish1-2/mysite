import React, { useState } from 'react';
import './achivements.css';
import { motion } from "framer-motion";

function Card({ onClose }) {
  return (
    <div className="card3">
      <h2>Card Title</h2>
      <p>Card content goes here</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(true);
  };

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <motion.div whileHover={{ scale: 1.15}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="CardDiv">
     <h1>SCHOOL</h1>
     <button className='btn btn-success' onClick={handleClick}>Show Card</button>
     {showCard && <Card onClose={handleClose} />}
    </motion.div>
  );
}

export default App;
