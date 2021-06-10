import styles from './IsSquare.module.css';
import { useState } from 'react';

const IsSquare = () => {

    const [state, setState] = useState({
        input: '',
        result: []
    })

    const isSquareFunction = num => {
        if (num < 0) {
            return `No`;
        } else if (num / Math.sqrt(num) == Math.sqrt(num)) {
            return `Yes`;
        } else if (num === 0) {
            return `Yes`;
        } else {
            return `No`;
        }
      } 

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = isSquareFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Is it squareable?</h2>
            <p className="challenge-description">Input a number to see if it has a whole square root</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="is-square" className="form-control challenge-input" placeholder="Your favorite number"
                />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
            <p id="challenge-result">{state.result}</p>
        </div>
    )
}

export default IsSquare;

