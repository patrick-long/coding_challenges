import React from 'react';
// import styles from './Main.module.css';
import BoolToWord from '../Challenges/BoolToWord/BoolToWord';
import ReverseString from '../Challenges/ReverseString/ReverseString';
import NumToReverseArray from '../Challenges/NumToReverseArray/NumToReverseArray';
import IsSquare from '../Challenges/IsSquare/IsSquare';
import SumOfArray from '../Challenges/SumOfArray/SumOfArray';
import NumberofMilliseconds from '../Challenges/NumberofMilliseconds/NumberofMilliseconds';
import OddOrEven from '../Challenges/OddOrEven/OddOrEven';
import NearestFive from '../Challenges/NearestFive/NearestFive';
import AlternateCapitalization from '../Challenges/AlternateCapitalization/AlternateCapitalization';
import HowManyVowels from '../Challenges/HowManyVowels/HowManyVowels';
import ShortestWord from '../Challenges/ShortestWord/ShortestWord';

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
      <NumberofMilliseconds />
      <OddOrEven />
      <NearestFive />
      <AlternateCapitalization />
      <HowManyVowels />
      <ShortestWord />
    </div>
  )
};

export default Main;
