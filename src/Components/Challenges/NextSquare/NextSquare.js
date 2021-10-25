import { useState } from 'react'; 

const NextSquare = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const findNextSquareFunction = sq => {
        if (Math.sqrt(sq) % 1 === 0) {
            return ( Math.sqrt(sq) + 1 ) * ( Math.sqrt(sq) + 1);
        } else {
            return -1;
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
        const challengeResult = findNextSquareFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Next Perfect Square</h2>
            <p className="challenge-description">Input a number to find the next perfect square</p>
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

export default NextSquare;