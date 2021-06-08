import styles from './NumToReverseArray.module.css';
import { useState } from 'react';

const NumToReverseArray = () => {

    const [state, setState] = useState({
        input: '',
        result: []
    })

    const numToReverseArrayFunction = num => {
        const reversedNumbers = num.toString().split('').reverse();
        const results = reversedNumbers.map(nums => {
            return parseInt(nums);
        })
        return results;
        // } else {
        //     return `Please try typing in a number instead`
        // }
      }

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = numToReverseArrayFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Number to reverse array of digits</h2>
            <p className="challenge-description">Input a number to reverse and put into an array</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="num-to-reverse-array" className="form-control challenge-input" placeholder="Your favorite number"
                />
                <button type="submit" className="btn btn-success">
                    Result
                </button>
            </form>
            {
                (state.result.length > 0) ?
                    <p id="challenge-result">[{state.result.map((res, idx) => {
                        if (idx < (state.result.length - 1)) {
                            return `${res}, `
                        } else {
                            return `${res}`
                        }
                    })}]</p>
                :
                    null
            }
        </div>
    )
}

export default NumToReverseArray;

