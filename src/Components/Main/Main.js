import React from 'react';
import styles from './Main.module.css';
import BoolToWord from '../Challenges/BoolToWord/BoolToWord';
import ReverseString from '../Challenges/ReverseString/ReverseString';
import NumToReverseArray from '../Challenges/NumToReverseArray/NumToReverseArray';
import IsSquare from '../Challenges/IsSquare/IsSquare';
import SumOfArray from '../Challenges/SumOfArray/SumOfArray';

const Main = () => {
  return (
    <div className="challenges-container">
      <p>I have completed all of the challenges here...</p>
      <p>Have fun with what you input!</p>
      <BoolToWord />
      <ReverseString />
      <NumToReverseArray />
      <IsSquare />
      <SumOfArray />
    </div>
  )
};

export default Main;
