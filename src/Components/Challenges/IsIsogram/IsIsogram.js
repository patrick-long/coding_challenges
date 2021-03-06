import { useState } from 'react';

const IsIsogram = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const isIsogramFunction = (str) => {
        const newStr = str.toLowerCase();
        for (let i = 0; i < newStr.length; i++) {
          for (let j = i + 1; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
              return 'false'
            } 
          }
        }
        return 'true'
    }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = isIsogramFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Is a string an isogram?</h2>
            <p className="challenge-description">Input a string to find out if it's an isogram (no repeat letters)</p>
            <form 
                className="challenge-form" 
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state.input} 
                    onChange={handleChange} 
                    name="input" 
                    className="form-control challenge-input" 
                    placeholder="Input string here"
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

export default IsIsogram;