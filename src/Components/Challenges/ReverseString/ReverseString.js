import styles from './ReverseString.module.css';
import { useState } from 'react';

const ReverseString = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const reverseStringFunction = str => {

    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = reverseStringFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Reverse a string</h2>
            <p className="challenge-description">Input a boolean (true or false) value and return either "Yes" for true or "No" for false</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="reverse-string" className="form-control challenge-input" placeholder='"true" or "false"'
                />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
            <p id="challenge-result">
                {state.result}
            </p>
        </div>
    )
}

export default ReverseString;

