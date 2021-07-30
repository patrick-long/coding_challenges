import { useState } from 'react';

const IsIsogram = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const isIsogramFunction = (str) => {
        const newStr = str.toLowerCase();
        for (let i = 0; i < newStr.length; i++) {
          for (let j = i + 1; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
              return false
            } 
          }
        }
        return true
    }

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