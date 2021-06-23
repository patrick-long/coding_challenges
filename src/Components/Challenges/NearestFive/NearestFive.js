import {useState} from 'react';

const NearestFive = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const nearestFiveFunction = (num) => {
        if (num == 0) {
            return 5
        } else if (parseInt(num)) {
            const nowNumber = parseInt(num);
            console.log(nowNumber, typeof nowNumber);
            return Math.ceil(nowNumber/5) * 5;
        } else {
            return 'Please input a number'
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
        const challengeResult = nearestFiveFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Nearest Multiple of 5</h2>
            <p className="challenge-description">Input a number to round up to the nearest multiple of 5</p>
            <form 
                className="challenge-form" 
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state.input} 
                    onChange={handleChange} 
                    name="input" 
                    className="form-control challenge-input" 
                    placeholder="Input number here"
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

export default NearestFive;