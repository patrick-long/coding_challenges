import { useState } from 'react';

const IsIsogram = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = isIsogramFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }

    return (
        <div></div>
    )
};

export default IsIsogram;