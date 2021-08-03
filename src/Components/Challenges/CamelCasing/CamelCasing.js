import { useState } from 'react'; 

const CamelCasing = () => { 

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const camelCasingFunction = (str) => {
        return str.replace(/([A-Z])/g, ' $1');
    };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = camelCasingFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };


    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Alter camelCasedStrings!</h2>
            <p className="challenge-description">Input a string add a space between all camelCased words (eg. "thisIsAString")</p>
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

export default CamelCasing;