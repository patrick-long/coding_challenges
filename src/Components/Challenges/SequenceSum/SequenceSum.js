import { useState } from 'react'; 

const SequenceSum = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });


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