import {useState} from 'react'; 

const ShortestWord = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });
    
    const shortestWordFunction = (str) => {
        
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

export default ShortestWord;