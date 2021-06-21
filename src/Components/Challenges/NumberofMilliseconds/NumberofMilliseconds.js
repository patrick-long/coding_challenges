import { useState, useEffect } from "react";

const NumberofMilliseconds = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const numberOfMillisecondsFunction = str => {
        return str.split('').reverse().join('');
    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = numberOfMillisecondsFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Reverse a string</h2>
            <p className="challenge-description">Input a string to reverse</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="reverse-string" className="form-control challenge-input" placeholder="Input string here"
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

export default NumberofMilliseconds;