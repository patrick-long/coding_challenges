import {useState} from 'react'; 

const HowManyVowels = () => {
    return (
        <div className="challenge-container">
            <h2 className="challenge-title">How many vowels in a string?</h2>
            <p className="challenge-description">Input a string to return how many vowels there are in the string</p>
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
}

export default HowManyVowels