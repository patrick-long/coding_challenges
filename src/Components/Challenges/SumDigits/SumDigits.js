import { useState } from 'react';

const SumDigits = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });
    
    const sumDigitsFunction = (number) => {
        if (Math.sign(number) === 1) {
          const numberArray = number.toString().split('');
          let total = 0;
          const newNumbers = numberArray.map(num => parseInt(num));
          newNumbers.map(num => total += num);
          return total;
        } else if (Math.sign(number) === -1) {
          const newNum = -number;
          const numberArray = newNum.toString().split('');
          let total = 0;
          const newNumbers = numberArray.map(num => parseInt(num));
          newNumbers.map(num => total += num);
          return total;
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
        const challengeResult = shortestWordFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Find sum of a number's digits</h2>
            <p className="challenge-description">Input a number to return the sum of its digits</p>
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
    )
}

export default SumDigits;