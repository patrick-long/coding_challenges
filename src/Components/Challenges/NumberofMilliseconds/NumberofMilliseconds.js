import { useState, useEffect } from "react";

const NumberofMilliseconds = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const numberOfMillisecondsFunction = str => {
        const splitString = str.split(', ');
        return ((splitString[0] * 3600) + (splitString[1] * 60) + splitString[2]) * 1000
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
            <h2 className="challenge-title">Number of Milliseconds</h2>
            <p className="challenge-description">Input an amount (hour, minutes, seconds) separated by commas to calculate in milliseconds</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" className="form-control challenge-input" placeholder="Input amount here"
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