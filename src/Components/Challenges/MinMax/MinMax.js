import { useState } from 'react';

const MinMax = () => {

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
        <div></div>
    )
};

export default MinMax;