import { useState } from 'react'; 

const LongestWord = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const longestWordFunction = str => {
        const strArray = str.split(' ');
        let longestCount = 0;
        for (let i = 0; i < strArray.length; i++) {
            strArray[i] > longestCount ? longestCount = strArray[i] : longestCount;
        };
    };


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Longest Word</h2>
            <p className="challenge-description">Input a string to find the length of the longest word</p>
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
    );
};

export default LongestWord;