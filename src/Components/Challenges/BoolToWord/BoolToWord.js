import styles from './BoolToWord.module.css';
import { useState } from 'react';

const BoolToWord = () => {

    const isBoolean = (str) => {

    }

    const onChange = () => {

    }

    const onSubmit = event => {
        event.preventDefault();

    }
    return (
        <div className={styles.BoolToWord}>
            <h2 className="challenge-title">BoolToWord</h2>
            <p className="challenge-description">Input a boolean (true or false) value and return either "Yes" for true or "No" for false</p>
            <form className="challenge-form" onSubmit={onSubmit}>
                <input type="text" name="challenge-input" id="bool-to-word" />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
        </div>
    )
}

export default BoolToWord;