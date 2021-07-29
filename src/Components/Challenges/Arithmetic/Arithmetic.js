import { useState } from 'react'; 

const Arithmetic = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const arithmeticFunction = (str) => {
        const useableVariables = str.split(', ');
        const a = parseInt(useableVariables[0]);
        const b = parseInt(useableVariables[1]);
        const operator = useableVariables[2];
        if (operator === 'add') {
            return a + b
        } else if (operator === 'subtract') {
            return a - b
        } else if (operator === 'multiply') {
            return a * b
        } else if (operator === 'divide') {
            return a / b
        } else {
            return 'Please try "add", "subtract", "multiply" or "divide" for the operator.'
        }
    };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = arithmeticFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Perform Arithmetic</h2>
            <p className="challenge-description">Input two numbers and an operation to perform</p>
            <form 
                className="challenge-form" 
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state.input} 
                    onChange={handleChange} 
                    name="input" 
                    className="form-control challenge-input" 
                    placeholder="Input numbers and operation here"
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
};

export default Arithmetic;