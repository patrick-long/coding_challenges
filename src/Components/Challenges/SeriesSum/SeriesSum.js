import { useState } from 'react'; 

const SeriesSum = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const seriesSumFunction = n => {
        let result = 0;
        let counter = 1;
        for (let i = 0; i < n; i++) {
            result += 1/counter;
            counter += 3;
        }
        
        return result.toFixed(2).toString();
    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = seriesSumFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Series Sum</h2>
            <p className="challenge-description">Input a number to find the series sum</p>
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
    );
};

export default SeriesSum;