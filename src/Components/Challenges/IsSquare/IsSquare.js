// import styles from './IsSquare.module.css';
import { useState } from 'react';

const IsSquare = () => {

    const [state, setState] = useState({
        input: '',
        result: []
    })

    const isSquareFunction = num => {
        return Math.sqrt(num) % 1 === 0;
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
            <p id="challenge-result">{state.result.toString()}</p>
        </div>
    )
}

export default IsSquare;

