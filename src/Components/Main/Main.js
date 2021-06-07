import React from 'react';
import styles from './Main.module.css';
import BoolToWord from '../Challenges/BoolToWord/BoolToWord';
import ReverseString from '../Challenges/ReverseString/ReverseString';

const Main = () => {
  return (
    <div className="challenges-container">
      <p>I have completed all of the challenges here...</p>
      <p>Have fun with what you input!</p>
      <BoolToWord />
      <ReverseString />
    </div>
  )
};

export default Main;
