import { useState } from 'react'; 

const OddOrEven = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const oddOrEvenFunction = (num) => {
        if (parseInt(num)) {
            const isNumber = parseInt(num);
            return isNumber % 2 ? 'Odd' : 'Even';
        } else if (num === '0') {
            return 'Interestingly, but technically, even'
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
        const challengeResult = oddOrEvenFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Odd or Even?</h2>
            <p className="challenge-description">Input a number to see if it's odd or even</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" className="form-control challenge-input" placeholder="Input number here"
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

export default OddOrEven