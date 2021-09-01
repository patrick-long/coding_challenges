import { useState } from 'react';

const MinMax = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const minMaxFunction = (str) => {
        const arr = str.split(', ');
        if (arr.length > 0) {
            const result = [Math.min(...arr), Math.max(...arr)];
            return `${result}`;
        };
    };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = minMaxFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Find the min and max of numbers array</h2>
            <p className="challenge-description">Input a series of numbers in an array (i.e. [1, 2, 3])</p>
            <form 
                className="challenge-form" 
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state.input} 
                    onChange={handleChange} 
                    name="input" 
                    className="form-control challenge-input" 
                    placeholder="Input array here"
                />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
            <p id="challenge-result">
                {state.result}
            </p>
        </div>
    );
};

export default MinMax;