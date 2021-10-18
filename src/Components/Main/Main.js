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
import SumDigits from '../Challenges/SumDigits/SumDigits';
import Arithmetic from '../Challenges/Arithmetic/Arithmetic';
import IsIsogram from '../Challenges/IsIsogram/IsIsogram';
import CamelCasing from '../Challenges/CamelCasing/CamelCasing';
import MinMax from '../Challenges/MinMax/MinMax';
import SplitStrings from '../Challenges/SplitStrings/SplitStrings';

const Main = () => {
  return (
    <>
    <div className="challenges-container1">
      <div className="animation1">
        <p>I have completed all of the challenges here...</p>
      </div>
      <div className="animation2">
        <p>Have fun with what you input!</p>
      </div>
      <BoolToWord />
      <ReverseString />
      <NumToReverseArray />
    </div>
    <div className="challenges-container2">
      <IsSquare />
      <SumOfArray />
      <NumberofMilliseconds />
      <OddOrEven />
    </div>
    <div className="challenges-container3">
      <NearestFive />
      <AlternateCapitalization />
      <HowManyVowels />
      <ShortestWord />
    </div>
    <div className="challenges-container4">
      <SumDigits />
      <Arithmetic />
      <IsIsogram />
      <CamelCasing />
      <MinMax />
      <SplitStrings />
    </div>
    </>
  )
};

export default Main;
