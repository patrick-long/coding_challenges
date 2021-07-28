import { useState } from 'react';

const SumDigits = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });
    
    const shortestWordFunction = (str) => {
        const wordsArray = str.split(' ');
        const lengthArray = wordsArray.map(word => word.length);
        const shortestWordIndex = lengthArray.indexOf(Math.min(...lengthArray));
        return wordsArray[shortestWordIndex];
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
        <div></div>
    )
}

export default SumDigits;