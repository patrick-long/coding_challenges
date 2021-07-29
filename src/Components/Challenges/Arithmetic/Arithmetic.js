import { useState } from 'react'; 

const Arithmetic = () => {

    const arithmeticFunction = (a, b, operator) => {
        if (operator === 'add') {
            return a + b
        } else if (operator === 'subtract') {
            return a - b
        } else if (operator === 'multiply') {
            return a * b
        } else if (operator === 'divide') {
            return a / b
        } else {
            return 'Please try "add", "subtract", "multiply" or "divide" for the operator.'
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
        const challengeResult = arithmeticFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div></div>
    )
};

export default Arithmetic;