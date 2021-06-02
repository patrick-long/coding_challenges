import React from 'react';
import styles from './Main.module.css';
import BoolToWord from '../Challenges/BoolToWord/BoolToWord';

const Main = () => {
  return (
    <div className={styles.Main}>
      <p>I have completed all of the challenges here...</p>
      <p>Have fun with what you input!</p>
      <BoolToWord />
    </div>
  )
};

export default Main;
