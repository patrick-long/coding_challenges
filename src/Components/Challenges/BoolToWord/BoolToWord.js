import styles from './BoolToWord.module.css';
import { useState } from 'react';

const BoolToWord = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const isBoolean = (str) => {
        return str;
    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = isBoolean(state.input);
        setState({
            result: challengeResult
        })
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">BoolToWord</h2>
            <p className="challenge-description">Input a boolean (true or false) value and return either "Yes" for true or "No" for false</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="bool-to-word" className="form-control challenge-input" placeholder='"True" or "False"'
                />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
            <p className="challenge-result">
                {state.result}
            </p>
        </div>
    )
}

export default BoolToWord;

