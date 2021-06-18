import { useState } from 'react'; 

const SumOfArray = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    })

    const sumOfArrayFunction = str => {
        console.log(str);
    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = sumOfArrayFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }
    
    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Find the sum of an array</h2>
            <p className="challenge-description">Input a series of numbers to reduce in "[number, number, number]" format</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="reverse-string" className="form-control challenge-input" placeholder="Input numbers here"
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

export default SumOfArray;