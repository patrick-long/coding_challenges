import { useState } from 'react';

const MinMax = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const minMaxFunction = (arr) => {
        if (arr.length > 0) {
            return [Math.min(...arr), Math.max(...arr)];
        };
    };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = minMaxFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }));
    };

    return (
        <div></div>
    )
};

export default MinMax;