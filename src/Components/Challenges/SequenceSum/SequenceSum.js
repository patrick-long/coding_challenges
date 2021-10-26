import { useState } from 'react'; 

const SequenceSum = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const sequenceSumFunction = (str) => {
        let functionArgs = str.split(', ');
        let begin = functionArgs[0];
        let end = functionArgs[1];
        let step = functionArgs[2];
        
        if (begin > end) {
            return 0;
        } else if (begin === end) {
            return begin;
        }
        
        let result = 0;
        for (let i = begin; i <= end; i += step) {
            result += i;
        }
        
        return result;
      };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = sequenceSumFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Sequence Sum</h2>
            <p className="challenge-description">Input a string of numbers to find the sequence sum in "num, num, num" format</p>
            <form 
                className="challenge-form" 
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state.input} 
                    onChange={handleChange} 
                    name="input" 
                    className="form-control challenge-input" 
                    placeholder="Input numbers here"
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

export default SequenceSum; 