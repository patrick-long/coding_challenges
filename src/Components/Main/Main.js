import React from 'react';
import styles from './Main.module.css';
import BoolToWord from '../Challenges/BoolToWord/BoolToWord';

const Main = () => {
  return (
    <div className={styles.Main}>
      <p>See if you can complete all of the Coding_Challenges!</p>
      <BoolToWord />
    </div>
  )
};

export default Main;
