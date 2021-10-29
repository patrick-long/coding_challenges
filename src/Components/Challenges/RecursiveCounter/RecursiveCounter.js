import { useState } from 'react'; 

const RecursiveCounter = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Recursive Counter</h2>
            <p className="challenge-description">Input a number for a recursive function to count to</p>
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

export default RecursiveCounter;